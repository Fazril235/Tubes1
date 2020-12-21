const spans = document.querySelectorAll('h1.content')
spans.forEach(span => span.addEventListener('mouseover', function(e){
}))
spans.forEach(span => span.addEventListener('mouseout', function(e){
}))

const controller = new scrollMagic.controller()
const scene = new scrollMagic.scene({
    triggerellement: '.skills',
    triggerhook: 0
})
.setTween(t1)
.addTo(controller)