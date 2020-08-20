new Vue({
	el: '#challange',
	data: {
		status: false,
		cars: ['BMW', 'Porshe', 'Ferrari', 'Land Rover'],
		books: {
			title: 'O Senhor dos Anéis',
			author: 'J.R.R. Tolkiens',
			volume: '3'
		},
		students: {
			id: 10,
			name: 'Maria',
			notes: [7.67, 8.33, 6.98, 9.21]
		}
	},
	methods: {
		toggleStatus() {
			console.log('entrou')
			this.status = !this.status
		}
	},
});
