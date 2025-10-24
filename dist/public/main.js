HFS.onEvent('entryIcon:after', ({ def, entry }, { output }) => {
    def = output.find(Boolean) || def // use other plugin's result, if any, as new default
    output.length = 0 // avoid showing multiple icons
    return HFS.h('span', { // wrap with an element
        onClick(e) {
            if (!HFS.fileShow(entry)) return // block click only if show is supported
            e.stopPropagation()
            e.preventDefault()
        }
    }, def)
})
