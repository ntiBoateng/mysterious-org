// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  console.log(returnRandBase())
  
  let pAequorFactory=(number,arr)=>{
    return {
      specimenNum : number,
      dna : arr,
      mutate(){
          let i = Math.floor(Math.random() * this.dna.length);
  
  let oldBase = this.dna[i];
  let altBases = ['A', 'T', 'C', 'G'];
  altBases.splice(altBases.indexOf(oldBase), 1); 
  let mutatedBase = altBases[Math.floor(Math.random() * 3)]; 
        
          return this.dna.splice(i, 1, mutatedBase);  
        
  },
  compareDNA(otherPAqeour) {
          let count = 0;
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] == otherPAqeour.dna[i]) {
              count += 1;
            }
          }
    
        },
        willLikelySurvive() {
          const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');
    
          if (cAndG.length/this.dna.length > 0.6) {
            return true;
          } else {
            return false;
          }
        }
  }
  }
  console.log(pAequorFactory(2,mockUpStrand()))
  
  
  
  
  
  
  