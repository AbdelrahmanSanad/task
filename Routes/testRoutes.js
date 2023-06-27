const fs = require('fs');
const express=require('express');
const router=express.Router();
const data= JSON.parse(fs.readFileSync(`${__dirname}/../data/TestData.json`,"utf-8"));


router.get('/',(req,res)=>{
    const mywords=data.wordList;
    const newWords=[];
    const filterFunction= function(array,filterItem){
        return array.filter(word=> word.pos===filterItem);
    }
    const adjectives=filterFunction(mywords,'adjective');
    const adverbs=filterFunction(mywords,'adverb');
    const noun=filterFunction(mywords,'noun');
    newWords.push(adjectives[Math.floor(Math.random()*adjectives.length)]);
    newWords.push(adverbs[Math.floor(Math.random()*adverbs.length)]);
    newWords.push(noun[Math.floor(Math.random()*noun.length)]);
    mywords.forEach(element => {
        if(newWords.length<10){
            
           newWords.push(mywords[Math.floor(Math.random()*mywords.length)]);
        }
    });
   
    
    res.status(200).send(newWords);
})

router.post('/',(req,res)=>{
    const finalScore=90;
    const testScoreCount=data.scoresList.length;
    const listScore= data.scoresList.filter(el=> +el<finalScore).length;
    const myRank=Math.round((listScore*100)/testScoreCount) ;
    res.status(200).send(`${myRank}`);

})





module.exports=router;