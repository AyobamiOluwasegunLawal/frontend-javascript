interface MajorCredits {
	credits: number;
	_brand: 'major_credits';
}

interface MinorCredits {
	credits: number;
	_brand: 'minor_credits';
}

function sumMajorCredits (subject1:MajorCredits, subject2:MajorCredits):MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		_brand: 'major_credits'
	}
}

function sumMinorCredits (subject1:MinorCredits, subject2:MinorCredits) {
	return {
		credits: subject1.credits + subject2.credits,
		_brand: 'minor_credits'
	}
}
