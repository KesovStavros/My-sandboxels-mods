"tesla_coil": {
	color: "#725c38",
	behavior: behaviors.WALL,
	behaviorOn: [
		"XX|CR:plasma|XX",
		"CR:plasma|XX|CR:plasma",
		"XX|CR:plasma|XX",
	],
	category: "machines",
	conduct: 1,
	insulate: true,
	ignoreConduct: ["plasma"],
	temp: 7065
},
"superheater": {
	color: "#dd1111",
	behavior: [
		"XX|HT:10|XX",
		"HT:10|XX|HT:10",
		"XX|HT:10|XX",
	],
	category:"machines",
	insulate:true
},
"freezer": {
	color: "#1111dd",
	behavior: [
		"XX|CO:10|XX",
		"CO:10|XX|CO:10",
		"XX|CO:10|XX",
	],
	category:"machines",
	insulate:true
}
