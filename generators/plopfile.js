module.exports = function (plop) {
	plop.setGenerator('c', {
		description: 'application controller logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/component/index.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/stories.tsx',
				templateFile: 'templates/component/stories.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/styles.ts',
				templateFile: 'templates/commons/styles.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/test.tsx',
				templateFile: 'templates/commons/test.tsx.hbs'
			}
		]
	})

	plop.setGenerator('t', {
		description: 'application controller logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Template name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/templates/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/template/index.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/templates/{{pascalCase name}}/styles.ts',
				templateFile: 'templates/commons/styles.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/templates/{{pascalCase name}}/test.tsx',
				templateFile: 'templates/commons/test.tsx.hbs'
			}
		]
	})
}
