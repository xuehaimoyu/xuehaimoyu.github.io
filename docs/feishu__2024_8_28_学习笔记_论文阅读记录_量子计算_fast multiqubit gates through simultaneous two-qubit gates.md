---
create_time: 1727533595
title: Fast Multiqubit Gates through Simultaneous Two-Qubit Gates
categories:
  - 学习笔记
---


# 概述

近期的量子计算机受到量子比特退相干的限制，只能以可接受的保真度运行低深度量子电路。这严重限制了量子算法在此类设备上的编译和实现。克服这些限制的一种方法是将可用的门集从单量子位和双量子位门扩展到多量子位门，从而在单个步骤中纠缠三个或更多量子位。

在这里，我们展示了这样的多量子位门可以通过同时将多个双量子位门应用于一组量子位来实现，其中至少有一个量子位涉及两个或多个双量子位门。

以这种方式实现的多量子位门与组成双量子位门一样快，有时甚至更快。此外，这些多量子位门不需要对量子处理器进行任何修改，但已经准备好用于当前的量子计算平台。我们在两个特定的情况下演示了这个想法:同时控制的z门和同时的iSWAP门。我们展示了所得到的多量子位门如何与其他知名的多量子位门相关，并通过数值模拟证明它们在可用的量子硬件中工作良好，门保真度远高于99%。我们还提出了使用这些同时的双量子比特门来快速创建像Dicke和greenberger - horn - zeilinger态这样的大纠缠态的方案。

展示了应用同时双量子位门来创建多量子位门的想法。

以CZ GATE为例

<img src="/assets/M3kDb79vwolOZSxfS4ecZO1Nnrg.bmp" src-width="1164" class="markdown-img m-auto" src-height="639" align="center"/>

比特排布如图所示，可以将三能级系统拆成两部分，$\text{Λ}$型和V型。

只存在图上所示的相互作用。

哈密顿量：$\begin{aligned}H&=[\lambda_1(t)(|110\rangle\langle200|+|111\rangle\langle201|)+\lambda_2(t)(|101\rangle\langle200|+|111\rangle\langle210|)+\mathrm{H.c.}]+\delta(|200\rangle\langle200|-|111\rangle\langle111|),\end{aligned}$

$\lambda$为上图b所示的耦合强度，$\delta$为失谐。

$\text{Λ}$型用另外一组基矢表示：

<img src="/assets/UVvPbw9YzoxnRhxACnAcVoEInQb.bmp" src-width="1101" class="markdown-img m-auto" src-height="926" align="center"/>

考虑$\lambda$$\delta$与时间无关，三能级系统的时间演化只影响由B和E张成的两能级子空间。

时间演化算符：

$$\begin{aligned}U^{(B,E)}(t)&=e^{-i\delta t/2}\bigg[\cos\bigg(t\sqrt{\Omega^2+\frac{\delta^2}4}\bigg)-i\sin\left(t\sqrt{\Omega^2+\frac{\delta^2}4}\right)\vec{n}^{(B,E)}\cdot\vec{\sigma}^{(B,E)}\bigg],\end{aligned}$$

为了产生有用的态，防止泄露到$|E\rangle$上去，必须有最小的时间演化条件：

$$t_{\mathrm{gate}}=\frac\pi{\sqrt{\Omega^2+\delta^2/4}}.$$

在这之后，$|B\rangle$和$|D \rangle$都将获得一个$-e^{-i\gamma}$的相位，而$|E\rangle$不会变。（这里论文里写错了）

满足演化方程

$$|D\rangle\langle D|-e^{-i\gamma}|B\rangle\langle B|=e^{(i/2)(\pi-\gamma)}e^{-(i/2)(\pi-\gamma)\vec{n}\cdot\vec{\sigma}}$$

对于另外一组基矢量V有类似的结论：

在有效的V型三能级系统中，门的唯一作用就是在$|111\rangle$给予相位因子$-e^{-i\gamma}$

三个量子位的计算子空间中的8个状态受到如下影响:$|101\rangle$和$|110\rangle$服从上式给出的时间演化，$|111\rangle$将获得相位因子$-e^{-i\gamma}$其他状态不变。

文章CCZS门，也在外部量子位q1和q2上实现了类似swap的操作，以中间量子位q0为条件，但在$|101\rangle$、$|110\rangle$和$|111\rangle$上添加了相位因子。

$$\begin{aligned}\mathrm{CCZS}(\theta,\phi,\gamma)&=|0\rangle\langle0|_0\otimes\mathbb{I}_1\otimes\mathbb{I}_2+|1\rangle\langle1|_0\otimes U_{\mathrm{CZS}}(\theta,\phi,\gamma),\end{aligned}$$

$$U_{\mathrm{CZS}}(\theta,\phi,\gamma)=\begin{bmatrix}1&0&0&0\\0&-e^{j\gamma}\sin^2(\theta/2)+\cos^2(\theta/2)&\frac12(1+e^{i\gamma})e^{-i\phi}\sin\theta&0\\0&\frac12(1+e^{i\gamma})e^{i\phi}\sin\theta&-e^{i\gamma}\cos^2(\theta/2)+\sin^2(\theta/2)&0\\0&0&0&-e^{i\gamma}\end{bmatrix}$$

通过改变具体的参数，可以获得不同的量子门。

但也明显可以看到，这不是Deutsch门，不满足前置条件，不冲突。

在CCZS门的分解上，拆成三个两比特门，但是编号需要改变。

<img src="/assets/Kt0MbYnShoFIRixf61gcyHZRn0b.bmp" src-width="1147" class="markdown-img m-auto" src-height="623" align="center"/>

在门的使用上，q0位于中间，但如果拆分成线性两比特门的话，需要三个，而且控制比特改变。

优势在于，这个门的运算速度相当于一个两比特门

对于Fredkin门，文章[Optimal simulation of Deutsch gates and the Fredkin gate](WssRwc2yhiip2Bk0xsfcNGvvnAh)提到至少需要5个两比特门，这里用CCZS门表示Fredkin Gate，需要和一个CCZ门合并。

<img src="/assets/LXVSb3l6UoqxrLx6jYrcLIupnee.bmp" src-width="1193" class="markdown-img m-auto" src-height="704" align="center"/>

这里说CCZ GATE可以分解为3个两比特门（https://www.nature.com/articles/nature10713.），而CCZS相当于1个两比特门，所以实际有所改进。

这里句产生了一个bug，CCZ门是Deutsch门，至少需要四个两比特门,矛盾了。

这篇文章应该更强调物理上的重复。

当然，也不止可以同时应用CZ门。

也可以同时应用iswap门。

<img src="/assets/T6tHbgGlQoHzvsxoMjXc3VU3noc.bmp" src-width="1110" class="markdown-img m-auto" src-height="655" align="center"/>

这种门很难用于控制，例如加门实现Fredkin Gate.

