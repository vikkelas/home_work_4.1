import healhColor from '../basic'

test.each([
	[{ name: 'Маг', health: 76 }, 'healthy'],
	[{ name: 'Маг', health: 45 }, 'wounded'],
	[{ name: 'Маг', health: 3 }, 'critical'],
])(
	'should return a string corresponding to the health level',
	(hero, codeword) => {
		const result = healhColor(hero)
		expect(result).toBe(codeword)
	}
)
