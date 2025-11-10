interface MajorCredits {
	credit: number;
	_brand: 'major_credits';
}

interface MinorCredits {
	credit: number;
	_brand: 'minor_credits';
}

function sumMajorCredits (subject1:MajorCredits, subject2:MajorCredits):MajorCredits {
	return {
		credit: subject1.credit + subject2.credit,
		_brand: 'major_credits'
	}
}

function sumMinorCredits (subject1:MinorCredits, subject2:MinorCredits) {
	return {
		credit: subject1.credit + subject2.credit,
		_brand: 'minor_credits'
	}
}
