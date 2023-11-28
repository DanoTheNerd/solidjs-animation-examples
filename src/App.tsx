import { Component, Show, createSignal } from 'solid-js';
import { styled, Button } from '@suid/material'

import logo from './logo.svg';
import styles from './App.module.css';
import { Disposer } from './disposer';
import { Motion, Presence } from '@motionone/solid';

const App: Component = () => {
  const [showA, setShowA] = createSignal(true)
  const [showB, setShowB] = createSignal(true)

  const Red = styled('div')(() => ({
    background: 'red',
  } as const))

  const Blue = styled('div')(() => ({
    background: 'blue',
  } as const))

  return (
    <>
      <div class={styles.App}>
        <Button onClick={() => setShowA(!showA())}>Toggle A</Button>
        <Button onClick={() => setShowB(!showB())}>Toggle B</Button>
        <Presence>
          <Show when={showA()}>
            <Motion.div
              initial={{ rotate: 90, opacity: 0 }}
              exit={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, easing: "ease-in-out" }}
            >
              <Disposer delay={ 2000 }>
                <Red>Component A with Disposer</Red>
              </Disposer>
            </Motion.div>
          </Show>
        </Presence>
        <Presence>
          <Show when={showB()}>
            <Motion.div
              initial={{ rotate: 90, opacity: 0 }}
              exit={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, easing: "ease-in-out" }}
            >
                <Blue>Component B without Disposer</Blue>
            </Motion.div>
          </Show>
        </Presence>
      </div>
    </>
  );
};

export default App;
