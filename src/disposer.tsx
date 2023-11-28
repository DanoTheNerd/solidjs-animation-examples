import { Component, ParentComponent, ParentProps, children, createRoot, onCleanup } from 'solid-js';

export const Disposer: ParentComponent<{
    delay?: number
}> = props => {
    const { dispose, resolved } = createRoot(dispose => ({
        dispose,
        resolved: children(() => props.children)
    }))

    onCleanup(async () => {
        await new Promise(resolve => window.setTimeout(resolve, props.delay ?? 500))
        dispose()
    })

    return (
        <>{ resolved() }</>
    )
}