const data = [
	{
		input: 'I would like to ask the estimated cost to build a house',
		output: ['Construction-Cost'],
	},
	{ 
		input: 'how much paint do i need for a wall',
		output: ['Painting']
	},
	{
		input: 'I would like an estimate for steel bars',
		output: ['Reinforcement-Works']
	},
	{
		input: 'I want to install tiles',
		output: ['Architectural'],
	},
	{
		input: 'How many chb do i need',
		output: ['Masonry'],
	},
	{
		input: 'give me an estimate for concrete sink',
		output: ['Concreting'],
	}, ///////////////////////////////////////////........
	{
		input: 'i want to paint my walls',
		output: ['Painting'],
	},
	{
		input: 'Please give me estimated quotation for building a house',
		output: ['Construction-Cost'],
	},
	{
		input: 'How much will it cost to build a house',
		output: ['Construction-Cost']
	},
	{
		input: 'Estimate quantity for stee bars',
		output: ['Reinforcement-Works']
	},
	{
		input: 'how many pieces of tiles do i need',
		output: ['Architectural']
	},
	{
		input: 'can you give me an estimate for concrete floor',
		output: ['Concreting']
	},
	{
		input: 'quantity of chb that i need',
		output: ['Masonry']
	},
];

const newData = [
	{ 
		input: 'How many materials do I need to complete a room set-up',
		output: ['Concreting'],
	},
	{
		input: 'How much does it cost to buy materials for the room',
		output: ['Construction-cost'],
	},
	{
		input: 'How many plywood do I need to build the ceiling',
		output: ['Concreting'],
	},
	{
		input: 'What are the materials needed to build the wall',
		output: ['Concreting'],
	},
	{
		input: 'How long will a brick wall structure last',
		output: ['Masonry'],
	},
	{
		input: 'What are the tools needed for BIM',
		ouput: ['Architectural'],
	},
	{
		input: 'How much time is needed to build a house',
		output: ['Reinforcement Works'],
	},
	{
		input: 'How many woods are needed in building a house',
		output: ['Reinforcement Works'],
	},
	{
		input: 'What are the materials needed in building the bathroom',
		output: ['Concreting']
	},
]

const temp = [
	{ // start of basic inputs - ['Reinforcement Works']
		input: 'reinforcement',
		output: ['Reinforcement Works'],
	},
	{
		input: 'reinforcements',
		output: ['Reinforcement Works'],
	},
	{
		input: 'steel bars',
		output: ['Reinforcement Works'],
	},
	{
		input: 'steel bar',
		output: ['Reinforcement Works'],
	},

	{ // start of basic inputs - ['Architectural Works']
		input: 'tile',
		output: ['Architectural'],
	},
	{
		input: 'tiles',
		output: ['Architectural'],
	},

	{ // start of basic inputs - ['Painting Works']
		input: 'paint',
		output: ['Architectural'],
	},

	{ // start of basic inputs - ['Masonry Works']
		input: 'chb',
		output: ['Masonry'],
	},
	{
		input: 'hollow blocks',
		output: ['Masonry'],
	},

	{ // start of basic inputs - ['Concreting Works']
		input: 'concrete',
		output: ['Concreting'],
	},
	{
		input: 'slab',
		output: ['Concreting'],
	},
	{
		input: 'footing',
		output: ['Concreting'],
	},
	{
		input: 'beam',
		output: ['Concreting'],
	},
	{
		input: 'column',
		output: ['Concreting'],
	},
	
	{ // start of basic inputs - ['Construction-Cost']
		input: 'house',
		output: ['Construction-Cost'],
	},
	{
		input: 'cost',
		output: ['Construction-Cost'],
	},
	{
		input: 'cost estimate',
		output: ['Construction-Cost'],
	},
	{
		input: 'estimated',
		output: ['Construction-Cost'],
	},
];