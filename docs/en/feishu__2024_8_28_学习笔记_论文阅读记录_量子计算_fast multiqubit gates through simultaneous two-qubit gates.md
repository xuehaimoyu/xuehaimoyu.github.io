---
create_time: 1727533595
title: Fast Multiqubit Gates through Simultaneous Two-Qubit Gates
categories:
  - Study notes
---

# Overview

Recent quantum computers are limited by qubit decoherence and can only run low-depth quantum circuits with acceptable fidelity. This severely limits the compilation and implementation of quantum algorithms on such devices. One way to overcome these limitations is to expand the available gate set from single and double qubit gates to multi-qubit gates, entangled with three or more qubits in a single step.

Here, we show that such a multi-qubit gate can be achieved by simultaneously applying multiple two-qubit gates to a set of qubits, where at least one qubit involves two or more two-qubit gates.

Achieving a multi-qubit gate in this way is just as fast, and sometimes even faster, than composing a two-qubit gate. In addition, these multi-qubit gates do not require any modifications to the quantum processor, but are ready for use in current quantum computing platforms. We demonstrated this idea in two specific cases: a z-gate that controls at the same time and an iSWAP gate at the same time. We show how the resulting multi-qubit gates correlate with other well-known multi-qubit gates and demonstrate through numerical simulations that they work well in available quantum hardware with gate fidelity well above 99%. We also propose a scheme to use these simultaneous two-qubit gates to quickly create large entangled states like Dicke and greenberger-horn-zeilinger states.

The idea of applying simultaneous two-qubit gates to create multi-qubit gates is demonstrated.

Take CZ GATE as an example

<img src="/assets/M3kDb79vwolOZSxfS4ecZO1Nnrg.bmp" src-width="1164" class="markdown-img m-auto" src-height="639" align="center"/>
As shown in the diagram, the three-level system can be split into two parts, $\text{Λ}$ and V.

Only the interactions shown on the diagram exist.

Hamiltonian:$\begin{aligned}H&=[\lambda_1(t)(|110\rangle\langle200|+|111\rangle\langle201|) +\lambda_2(t)(|101\rangle\langle200|+|111\rangle\langle210|) +\mathrm{H.c.}]+\delta(|200\rangle\langle200|-|111\rangle\langle111|),\end{aligned}$

$\lambda$ is the coupling strength shown in Figure B above, and $\delta$ is the detuning.

The $\text{Λ}$ type is represented by another set of base vectors:

<img src="/assets/UVvPbw9YzoxnRhxACnAcVoEInQb.bmp" src-width="1101" class="markdown-img m-auto" src-height="926" align="center"/>
Considering that $\lambda$$\delta$ is independent of time, the temporal evolution of a three-level system only affects the two-level subspace composed of B and E.

Time Evolution Operator:

$$\begin{aligned}U^{(B,E)}(t)&=e^{-i\delta t/2}\bigg[\cos\bigg(t\sqrt{\Omega^2+\frac{\delta^2}4}\bigg)-i\sin\left(t\sqrt{\Omega^2+\frac{\delta^2}4}\right)\vec{n}^{(B,E)}\cdot\vec{\sigma}^{(B,E)}\bigg],\end{aligned}$$

In order to produce useful states, prevent leakage to $|E\rangle$, there must be a minimum time evolution condition:

$$t_{\mathrm{gate}}=\frac\pi{\sqrt{\Omega^2+\delta^2/4}}.$$

After this, $|B\rangle$ and $|D \rangle$ will get a phase of $-e^{-i\gamma}$, and $|E\rangle$ will not change. (It was written incorrectly in the paper here)

Meet the evolutionary equations

$$|D\rangle\langle D|-e^{-i\gamma}|B\rangle\langle B|=e^{(i/2)(\pi-\gamma)}e^{-(i/2)(\pi-\gamma)\vec{n}\cdot\vec{\sigma}}$$A similar conclusion is made for another set of basis vectors V:

In an effective V-type three-level system, the only function of the gate is to give a phase factor $-e^{-i\gamma}$ at $|111\rangle$

The eight states in the computational subspace of the three qubits are affected by the following effects: $|101\rangle$ and $|110\rangle$ obey the time evolution given by the above equation, and $|111\rangle$ will obtain the phase factor $-e^{-i\gamma}$ and the other states remain unchanged.

The CCZS gate also implements a swap-like operation on the external qubits q1 and q2, conditional on the intermediate qubit q0, but adds phase factors to $|101\rangle$, $|110\rangle$, and $|111\rangle$.

$$\begin{aligned}\mathrm{CCZS}(\theta,\phi,\gamma)&=|0\rangle\langle0|_0\otimes\mathbb{I}_1\otimes\mathbb{I}_2+|1\rangle\langle1|_0\otimes U_{\mathrm{CZS}}(\theta,\phi,\gamma),\end{aligned}$$

$$U_{\mathrm{CZS}}(\theta,\phi, \gamma)=\begin{bmatrix}1&0&0&0\\0&-e^{j\gamma}\sin^2(\theta/2)+\cos^2(\theta/2)&\frac12(1+e^{i\gamma})e^{-i\phi}\sin\theta&0\\0&\frac12(1+e^{i\gamma})e^{i\phi}\sin\ theta&-e^{i\gamma}\cos^2(\theta/2)+\sin^2(\theta/2)&0\\0&0&0&-e^{i\gamma}\end{bmatrix}$$

By varying the specific parameters, different quantum gates can be obtained.

But it is also obvious that this is not a Deutsch door, does not meet the preconditions, and does not conflict.

In the decomposition of the CCZS gate, it is split into three two-bit gates, but the number needs to be changed.

<img src="/assets/Kt0MbYnShoFIRixf61gcyHZRn0b.bmp" src-width="1147" class="markdown-img m-auto" src-height="623" align="center"/>
In the use of gates, Q0 is in the middle, but if it is split into a linear two-bit gate, three are required, and the control bits change.

The advantage is that this gate is as fast as a two-bit gate

For the Fredkin gate, the article [Optimal simulation of Deutsch gates and the Fredkin gate](WssRwc2yhiip2Bk0xsfcNGvvnAh) mentions that at least 5 two-bit gates are required, and here the Fredkin Gate is represented by a CCZS gate, which needs to be merged with a CCZ gate.

<img src="/assets/LXVSb3l6UoqxrLx6jYrcLIupnee.bmp" src-width="1193" class="markdown-img m-auto" src-height="704" align="center"/>
It is said that CCZ GATE can be decomposed into 3 two-bit gates (https://www.nature.com/articles/nature10713.), and CCZS is equivalent to 1 two-bit gate, so it is actually improved.

There is a bug in this sentence, the CCZ gate is a Deutsch gate, and at least four two-bit gates are needed, which is contradictory.

This article should place more emphasis on physical repetition.

Of course, it is not only possible to apply CZ gates at the same time.

It is also possible to apply iswap gates at the same time.

<img src="/assets/T6tHbgGlQoHzvsxoMjXc3VU3noc.bmp" src-width="1110" class="markdown-img m-auto" src-height="655" align="center"/>

This kind of gate is difficult to control, e.g. the Fredkin Gate is implemented by the Gamon Gate.