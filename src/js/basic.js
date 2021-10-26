export default function healhColor(hero) {
	if (hero.health > 50) {
		return 'healthy'
	}
	if (hero.health < 50 && hero.health > 15) {
		return 'wounded'
	}
	if (hero.health < 15) {
		return 'critical'
	}
}
