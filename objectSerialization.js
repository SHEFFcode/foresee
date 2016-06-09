var tree = {
	"Sergei": {
		"Larry": {
			"Sundar": {}
		}
	},
	"Bill": {
		"Steve": {
			"Satya": {}
		}
	}
}

function printFamilyTree (tree) {
	var str = '';
	console.log(Object.keys(tree));
	function traverse (currBranch) {
		for (var person in currBranch) {
			str += person;
			console.log(str);
			if (JSON.stringify(currBranch[person]) === '{}') {
				str = '';
				return;
			} else {
				str+= ' -> ';
				traverse(currBranch[person]);
			}
		}
	}
	traverse(tree);
}

printFamilyTree(tree);