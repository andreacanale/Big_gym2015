/*
Title: Guided tour script
Description: A script to manage guided tours for
	big gym 2015 implementation
Authors: Filippo Pagano, Andrea Canale
*/


/*prepare guided tours:
	crea n vettori di guided tours
carica nuova pagina uscendo da tutti i guided tours
	distruggi pila dei guided tours iniziati
	distruggi vettori per nuovi guided tours
	prepare guided tours
inizia un guided tour
	distruggi eventuale vettore alternativo
	segna sullo stack di navigazione le informazioni sul nuovo guided tour
	fornisci link
fornisci link e info	
	fornisci link previous, next, what you are seeing now
	forni what you are seeing now
	fornisci n of N
continua guided tour
	fornisci link
	prepare guided tours
termina guided tour
	elimina dallo stack di navigazione l'ultimo guided tour
	elimina vettore del guided tour
	*/
	var stackContext=new Array();
	var stackEntry=new Array();
	var stackTourVector=new Array();
	var stackPosition=new Array();
	
	function startGT(context,entry,tourVector){
		stackContext.push(context);
		stackEntry.push(entry);
		while (tourVector[0] != entry){
			tourVector.push(tourVector.shift());
		}
		stackTourVector.push(tourVector);
		stackPosition.push(0);
	}
	/*
	function giveOrientationInfos
	returns an array with these keys:
	previous, next, current, context, toursSize
	*/
	function giveOrientationInfos(){
		if (!(stackContext.length > 0 && stackEntry.length>0 && stackPosition>0 && stackTourVector.length>0)) return;
		var result=new Array();
		if (stackPosition[stackPosition.length-1]>0){
			var tmpVec = stackTourVector.pop();
			var tmpPos = stackPosition.pop();
			result["previous"]=tmpVec[tmpPos-1];
			stackTourVector.push(tmpVec);
			stackPosition.push(tmpPos);
		} else {
			result["previous"]=stackContext[stackContext.length-1];
		}
		if (stackPosition[stackPosition.length-1]<stackTourVector[stackPosition.length-1].length-1){
			result["next"]=stackTourVector[stackTourVector.length -1][stackPosition[stackPosition.length-1]+1];
		} else{
			result["next"]=stackContext[stackContext.length-1];
		}
		result["context"]=stackContext[stackContext.length-1];
		result["current"]=stackPosition[stackPosition.length-1];
		var tmp=stackTourVector.pop();
		result["tourSize"]=tmp.length;
		stackTourVector.push(tmp);
		return result;
	}
	function GTnext(){
		if (stackPosition[stackPosition.length-1]<stackTourVector[stackPosition.length-1].length-1){
			stackPosition.push(stackPosition.pop()+1);
		} else{
			terminateGT();
		}
	}
	function GTprevious(){
		if (stackPosition[stackPosition.length-1]>0){
			stackPosition.push(stackPosition.pop()-1);
		} else {
			terminateGT();
		}	
	}
	function terminateGT(){
		stackContext.pop();
		stackEntry.pop();
		stackTourVector.pop();
		stackPosition.pop();
	}
	function clearAllGTStacks(){
		var stackContext=new Array();
		var stackEntry=new Array();
		var stackTourVector=new Array();
		var stackPosition=new Array();
	}
	
	