const vm=require("vm"),fs=require("fs");
const src=fs.readFileSync(process.argv[2],"utf8");
const store={};          // données persistantes du « LMS » (une ligne par agent)
let sessions=0;
function nouvelleSession(){
  sessions++;
  const cmi=Object.assign({},store);
  cmi["cmi.core.entry"]= store["cmi.core.lesson_status"]? "resume":"ab-initio";
  const api={
    LMSInitialize(){return "true"},
    LMSGetValue(k){return cmi[k]===undefined?"":cmi[k]},
    LMSSetValue(k,v){cmi[k]=v;store[k]=v;return "true"},
    LMSCommit(){return "true"},
    LMSFinish(){return "true"},
    LMSGetLastError(){return "0"},LMSGetErrorString(){return ""}
  };
  const w={API:api,location:{search:""},addEventListener(){},console};
  w.parent=w; w.window=w;
  const sb={window:w,document:{readyState:"complete",addEventListener(){},body:null},console:{log(){}}};
  vm.runInNewContext(src,sb);
  return sb.window.DINA_SCORM;
}
let ok=true;
function attendu(nom,val,att){const bon=String(val)===String(att);if(!bon)ok=false;console.log((bon?"OK  ":"ÉCHEC ")+nom+" : "+val+(bon?"":" (attendu "+att+")"));}
// 1. premier passage : échec 4/6
let S=nouvelleSession();S.init();
attendu("1 entrée au premier lancement",S.diagnostic().entry,"ab-initio");
attendu("1 statut au lancement",store["cmi.core.lesson_status"],"incomplete");
S.setProgress("ep2:QFQ-E2-FIN");
attendu("1 position enregistrée",store["cmi.core.lesson_location"],"ep2:QFQ-E2-FIN");
S.ecrireEtat(JSON.stringify({a:1}));
S.setResult("failed",4,6);
attendu("1 échec : statut",store["cmi.core.lesson_status"],"failed");
attendu("1 échec : score sur 100",store["cmi.core.score.raw"],"67");
S.finish();
attendu("1 fin de module après échec : statut inchangé",store["cmi.core.lesson_status"],"failed");
attendu("1 exit = suspend",store["cmi.core.exit"],"suspend");
S.terminer();
// 2. relance : reprise de l'état, puis réussite 5/6
S=nouvelleSession();
attendu("2 relance : entrée",S.diagnostic().entry||"(avant init)","(avant init)");
const e=S.lireEtat();
attendu("2 relance : état relu",JSON.stringify(e),'{"a":1}');
attendu("2 relance : entrée = resume",S.diagnostic().entry,"resume");
attendu("2 relance : statut lu",S.diagnostic().statutInitial,"failed");
S.setResult("passed",5,6);
attendu("2 réussite : statut",store["cmi.core.lesson_status"],"passed");
attendu("2 réussite : score",store["cmi.core.score.raw"],"83");
S.terminer();
// 3. nouvelle relance : un échec ne dégrade jamais une réussite
S=nouvelleSession();S.lireEtat();
attendu("3 statut lu au lancement",S.diagnostic().statutInitial,"passed");
S.setResult("failed",3,6);
attendu("3 réussi puis raté : statut",store["cmi.core.lesson_status"],"passed");
attendu("3 réussi puis raté : score conservé",store["cmi.core.score.raw"],"83");
S.finish();
attendu("3 fin de module : statut",store["cmi.core.lesson_status"],"passed");
S.terminer();
// 4. module lu sans évaluation : terminé
for(const k in store)delete store[k];
S=nouvelleSession();S.init();S.finish();
attendu("4 sans évaluation : statut",store["cmi.core.lesson_status"],"completed");
// 5. limite de sauvegarde (contenu peu compressible)
let alea="";const car="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let g=12345;
for(let i=0;i<6000;i++){g=(g*1103515245+12345)&0x7fffffff;alea+=car.charAt(g%car.length);}
attendu("5 état > 4 096 caractères (après compression) refusé",S.ecrireEtat(JSON.stringify({x:alea})),"false");
attendu("5 état normal accepté",S.ecrireEtat(JSON.stringify({x:"a".repeat(500)})),"true");
// 6. compression : aller-retour exact, accents compris, et lecture d'un ancien état en JSON simple
const riche={ecran:"M1-EVA-RES",faites:["ep1","ep2"],reponses:{},carnet:[{type:"fiche",id:"FICHE-M1-E1"}],libre:"Réponse libre : l'État → la province, 100 % ✓"};
for(let i=1;i<=6;i++){const r={},v={};for(let b=1;b<=8;b++){r["bloc"+b]={item1:"C",item2:"A",item3:"é à ô"};v["bloc"+b]=true;}riche.reponses["PAGE-"+i]={r,v};}
S=nouvelleSession();S.init();
S.ecrireEtat(JSON.stringify(riche));
attendu("6 état stocké compressé",String(store["cmi.suspend_data"]).charAt(0),"~");
attendu("6 état plus court que le JSON",store["cmi.suspend_data"].length<JSON.stringify(riche).length,"true");
S.terminer();
S=nouvelleSession();
attendu("6 relecture exacte",JSON.stringify(S.lireEtat()),JSON.stringify(riche));
S.terminer();
store["cmi.suspend_data"]=JSON.stringify(riche);
S=nouvelleSession();
attendu("6 ancien état JSON simple encore lu",JSON.stringify(S.lireEtat()),JSON.stringify(riche));
S.terminer();
store["cmi.suspend_data"]="~@@@pas-un-état";
S=nouvelleSession();
attendu("6 état corrompu : aucun plantage, état vide",S.lireEtat(),"null");
console.log(ok?"\nTOUS LES CONTRÔLES PASSENT":"\nDES CONTRÔLES ÉCHOUENT");
process.exit(ok?0:1);
