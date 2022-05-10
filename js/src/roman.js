class Roman {
    decode(romanNumber){
				let roman = Array.from(romanNumber)
				let number = 0

				for(let i = 0; i < roman.length; i++){

					let decode = 0
					let current = this.decodeCaracter( roman[i] )
					let next = this.decodeCaracter( roman[i+1] )	

					if( current < next ){
							decode = next - current
							i++
					} else {
							decode = current
					}

					number = number + decode
				}
				
        return number;
    }
		decodeCaracter(letter){
					switch(letter){
							case 'I': return 1
							case 'V': return 5
							case 'X': return 10
							case 'L': return 50
							case 'C': return 100
							case 'D': return 500
							case 'M': return 1000
					}
		}
}

module.exports = Roman;
