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