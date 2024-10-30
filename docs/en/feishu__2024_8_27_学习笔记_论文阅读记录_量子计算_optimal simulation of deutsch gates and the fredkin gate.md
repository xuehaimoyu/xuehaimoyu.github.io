---
create_time: 1727403607
title: Optimal simulation of Deutsch gates and the Fredkin gate
categories:
  - Study notes
---

---

## Main content

The two-bit gate cost of the Deutsch gate was characterized by the two-bit gate cost of the two-bit gate simulated using a combination of two-bit gates. The function of any Deutsch is a simple three-quantum control unitary gate, which can be intuitively explained as follows: the gate directly outputs the state of two control qubits, and only when the state of both control qubits is 1 will the gate apply a given one-qubit unitary to the target qubit. For Deutsch gates, the determinant of u is 1 and requires 4 two-bit gates, otherwise 5 are needed.

## Research implications

A great challenge in contemporary science and engineering is to build a complete quantum computer, which is essentially a large quantum circuit composed of elementary quantum logic gates. In order to implement quantum algorithms, it is necessary to simulate a relatively high level of control of multi-qubit quantum systems, even in small sizes. Experiments have also shown that high-fidelity two-qubit gates, such as the two-qubit gate of superconducting qubits, can be achieved with existing techniques with a fidelity of more than 90% [10]. Finding more efficient ways to implement quantum gates can demonstrate small-scale quantum computing tasks in less time.

In layman's terms, quantum computers are still relatively rubbish, and there are many gates that will face various problems, and multi-bit quantum gates are not easy to do, so the number of decomposed quantum gates should be minimized as much as possible.

## Technical details

### 1、Deutsch gates

$$U_{AR}=|0_{A}\rangle\langle0_{A}|\otimes u_{0}+|1_{A}\rangle\langle1_{A}|\otimes u_{1}.$$

In a controlled 3-bit gate, only 1,2 position state vectors are $|1\rangle$ to exert u control on 3, otherwise it is unchanged.

This also gives a way to write expressions that control the U-matrix.

Two proven propositions:

<img src="/assets/Z43ObiJd6oXTzQxIfciczCN1nSe.png" src-width="873" class="markdown-img m-auto" src-height="301" align="center"/>
### Optimization of Deutsch doors

https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4087 article proves that any Deutsch gate can be represented by 5 two-bit quantum logic gates.

For the general Deutsch gate, the expression is as follows:

$$V(\theta_{1}, \theta_{2})=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&1&0&0\\0&0&0&0&0&0&e^{{i\theta_{1}}}&0\\0&0& 0&0&0&0&0&e^{{i\theta_{2}}}\end{pmatrix}.$$

Q1: The representation of the Deutsch door here is a bit strange.

Theorem 1: https://journals.aps.org/pra/pdf/10.1103/PhysRevA.88.010304

But the article is written by themselves

<img src="/assets/UufWb6k7po6BQ2xCK73ckGEFnec.bmp" src-width="877" class="markdown-img m-auto" src-height="84" align="center"/>Deformation:

$$\begin{aligned}V(0,\theta_{2}-\theta_{1})_{ABC}=V(\theta_1,\theta_2)_{ABC}W(-\theta_1)_{AB}=W(-\theta_1)_{AB}V(\theta_1,\theta_2)_{ABC}, \end{aligned}$$

$$W(\theta)=|00\rangle\langle00|+|01\rangle\langle01|+|10\rangle\langle10|+e^{i\theta}|11\rangle\langle11|. $$

So Corollary 1:

<img src="/assets/ULB4bXiePoyzlcxqHk3cTIv3nhg.bmp" src-width="864" class="markdown-img m-auto" src-height="109" align="center"/>

and Corollary 2

<img src="/assets/MQwNbXyk5oViaGxpn2acwKsQnab.bmp" src-width="991" class="markdown-img m-auto" src-height="299" align="center"/>

From this, a series of proofs can be used to derive theorem 2

<img src="/assets/ZDVDbWogvo3HLcxrgY9cDzh0nOh.bmp" src-width="849" class="markdown-img m-auto" src-height="77" align="center"/>
There is a bug here, the CCZ gate is a Deutsch gate, and at least four two-bit gates are needed, which is contradictory.

---

Q2: Why is it contradictory that CCZ can be represented by only 3 two-quantum gates when it is clearly a Deutsch gate?

A2： Expression for CCZ gates

$$CCZ=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&1&0&0\\0&0&0&0&0&0&1&0\\0&0&0&0&0&0&0&-1\end{ pmatrix}$$

Normally, it can be represented by four two-bit gates

A CCZ gate can normally be implemented with four two-bit gates, and the following combinations can be used:

1. Step 1: Use a controlled-NOT(CX) gate with a control bit of A and a target bit of B.
2. Step 2: Use a Controlled-S(CS) gate to control bit B to control the target bit C.
3. Step 3: Use another Controlled-NOT(CX) gate with a control bit of A and a target bit of B (this step is used to restore the state).
4. Step 4: Use another Controlled-S gate to control bit B to control the target bit C.

$\mathrm{CX}_{A\to B}=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&0&0&1&0\\0&0&0&0&0&1&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&0& 0&1\end{pmatrix}$$\mathrm{CS}_{B\to C}=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&1&0&0\\0&0&0&0&0&0&1&0\\0&0&0&0&0&0&0&i\end{pmatrix}$

But this is actually contradictory to the conclusion, the determinant is -1, there should be 5, but in fact 4 is enough, indicating that there is indeed a problem with the condition setting.

As for nature's article:

<img src="/assets/AC6DbMyccoznZ1xlkXccbmc5nMd.bmp" src-width="890" class="markdown-img m-auto" src-height="920" align="center"/>

The use of 3 should be different from the classical tradition of qubits, which use three energy levels.

<img src="/assets/KqerbgtOPoZhzzxJsYqc5e6Rngh.bmp" src-width="832" class="markdown-img m-auto" src-height="91" align="center"/>