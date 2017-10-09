$('#intro').typeIt({
	speed: 50,
     autoStart: false
})
.tiType('My name is Anna Boone, and I am a ')
.tiPause(300)
.tiType('designer, ')
.tiPause(300)
.tiType('coder, ')
.tiPause(300)
.tiType('and dog person')
.tiPause(300)
.tiSettings({deleteSpeed: 50}) .tiDelete(10)
.tiPause(300)
.tiType('journalist.')
.tiPause(300);