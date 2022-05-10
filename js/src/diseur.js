class Diseur {
  suivant(current){

			//if(current == '') return ''

			let tabNumber = Array.from( current )
			let say = ''
			let quantity = 0

			for(let i = 0; i < tabNumber.length; i++){
				let current = tabNumber[i] 
				let before = i == 0 ?  current : tabNumber[i-1]

				if(current == before) quantity++
				else {
						say = say + quantity + before
						quantity = 1
				}
			}

			say = say + quantity + tabNumber[tabNumber.length-1]
      return say;
  }
}

module.exports = Diseur;
