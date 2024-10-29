---
create_time: 1727403607
title: Optimal simulation of Deutsch gates and the Fredkin gate
categories:
  - 学习笔记
---


---

## 主要内容

研究使用二比特门的组合模拟三比特门，表征了Deutsch门的两比特门成本。任何Deutsch的功能都是一个简单的三量子控制酉门，可以直观地解释如下:门直接输出两个控制量子位的状态，只有当两个控制量子位的状态都为1时，门才会将给定的一量子位酉u应用到目标量子位上。对于Deutsch门，u的行列式为1，需要4个两比特门，否则需要5个。

## 研究意义

当代科学和工程中的一个巨大挑战是建立一个完整的量子计算机，它本质上是一个由基本量子逻辑门组成的大型量子电路。为了实现量子算法，即使在小尺寸中，也必须模拟对多量子位量子系统的相对高水平的控制。实验也证明，利用现有技术可以实现高保真度的两量子比特门，例如超导量子比特的双量子比特门，保真度超过90%[10]。找到更有效的方法来实现量子门，可以在更短的时间内演示小规模的量子计算任务。

通俗的说，就是现在量子计算机还比较垃圾，门多了会面临各种问题，多比特量子门不容易搞，所以尽可能让分解的量子门的数量最少。

## 技术细节

### 1、Deutsch gates

$$U_{AR}=|0_{A}\rangle\langle0_{A}|\otimes u_{0}+|1_{A}\rangle\langle1_{A}|\otimes u_{1}.$$

受控3比特门，只有1，2位置态矢量均为$|1\rangle$时对3施加u控制，否则不变。

这也给出来一种怎么写出控制U矩阵的表达式的方法。

两个得到证明的命题：

<img src="/assets/Z43ObiJd6oXTzQxIfciczCN1nSe.png" src-width="873" class="markdown-img m-auto" src-height="301" align="center"/>

### Deutsch门的优化

https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4087文章证明了任何Deutsch门都可以用5个两比特量子逻辑门表示。

对一般的Deutsch门来说，表达形式为：

$$V(\theta_{1},\theta_{2})=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&1&0&0\\0&0&0&0&0&0&e^{{i\theta_{1}}}&0\\0&0&0&0&0&0&0&e^{{i\theta_{2}}}\end{pmatrix}.$$

Q1：这里的Deutsch门的表示形式有点奇怪。

定理1：https://journals.aps.org/pra/pdf/10.1103/PhysRevA.88.010304

但这篇文章是他们自己写的文章

<img src="/assets/UufWb6k7po6BQ2xCK73ckGEFnec.bmp" src-width="877" class="markdown-img m-auto" src-height="84" align="center"/>

变形：

$$\begin{aligned}V(0,\theta_{2}-\theta_{1})_{ABC}=V(\theta_1,\theta_2)_{ABC}W(-\theta_1)_{AB}=W(-\theta_1)_{AB}V(\theta_1,\theta_2)_{ABC},\end{aligned}$$

$$W(\theta)=|00\rangle\langle00|+|01\rangle\langle01|+|10\rangle\langle10|+e^{i\theta}|11\rangle\langle11|.$$

所以推论1：

<img src="/assets/ULB4bXiePoyzlcxqHk3cTIv3nhg.bmp" src-width="864" class="markdown-img m-auto" src-height="109" align="center"/>

以及推论2

<img src="/assets/MQwNbXyk5oViaGxpn2acwKsQnab.bmp" src-width="991" class="markdown-img m-auto" src-height="299" align="center"/>

由此经过一系列证明可以得到定理2

<img src="/assets/ZDVDbWogvo3HLcxrgY9cDzh0nOh.bmp" src-width="849" class="markdown-img m-auto" src-height="77" align="center"/>

这里产生了一个bug，CCZ门是Deutsch门，至少需要四个两比特门,矛盾了。

---

Q2:为什么CCZ明明是Deutsch门，却只用3个两量子门就可以表示，矛盾吗？

A2：CCZ门的表达式

$$CCZ=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&1&0&0\\0&0&0&0&0&0&1&0\\0&0&0&0&0&0&0&-1\end{pmatrix}$$

正常是可以用四个两比特门进行表示

正常可以四个两比特门实现 CCZ 门，可以采用以下组合：

1.  **第一步**：使用一个 Controlled-NOT（CX）门，控制比特为 A，目标比特为 B。
2.  **第二步**：使用一个 Controlled-S（CS）门，以控制比特 B控制目标比特 C。
3.  **第三步**：使用另一个 Controlled-NOT（CX）门，控制比特为 A，目标比特为 B（此步骤用于恢复状态）。
4.  **第四步**：再使用一个 Controlled-S 门，以控制比特 B控制目标比特 C。

$\mathrm{CX}_{A\to B}=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&0&0&1&0\\0&0&0&0&0&1&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&0&0&1\end{pmatrix}$$\mathrm{CS}_{B\to C}=\begin{pmatrix}1&0&0&0&0&0&0&0\\0&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&0&0&1&0&0&0&0\\0&0&0&0&1&0&0&0\\0&0&0&0&0&1&0&0\\0&0&0&0&0&0&1&0\\0&0&0&0&0&0&0&i\end{pmatrix}$

但这个其实也与结论矛盾，行列式为-1，应该5个，但实际上4个就够了，说明条件设置确实有问题。

至于nature的文章：

<img src="/assets/AC6DbMyccoznZ1xlkXccbmc5nMd.bmp" src-width="890" class="markdown-img m-auto" src-height="920" align="center"/>

使用3个应该是与经典传统的量子比特不同，使用了三个能级。

<img src="/assets/KqerbgtOPoZhzzxJsYqc5e6Rngh.bmp" src-width="832" class="markdown-img m-auto" src-height="91" align="center"/>

