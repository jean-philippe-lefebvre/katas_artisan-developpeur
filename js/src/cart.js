class Cart {
    constructor() {
				this.books = []
    }

    addBook(title) {
				this.books.push(title)
    }

		createLots(books){
				let lots = [ [] ]

				for(const book of books){
						let own = 0

						for(const lot of lots){
								if( !this.bookIsInLot(book, lot) ){
										lot.push(book) 
										own = 0
										break
								}
								else own = 1
						}

						if(own) lots.push([book])
				}
				return lots
		}

		bookIsInLot(book, lot){
			return !!lot.find((elm) => elm === book)	
		}

    getPrice() {
				let discount = 0
				let price = 0
				let lots = []

				if(this.books.length == 0) return 0

				lots = this.createLots(this.books)

				//Calcule Price
				for(const lot of lots){
						discount = (lot.length - 1) * 0.05
						price = price + ( (lot.length * 8) * (1 - discount) )
				}

        return price
    }
}

module.exports = Cart;
