---
layout: null
title: KAN
hide: false
hide_child: false
keywords:
  - KAN
  - 学习笔记
  - learning_note
categories:
  - learning_note
create_time: 1732794896
---


# KAN

文章链接：https://arxiv.org/abs/2404.19756

## 概述

KAN 称为Kolmogorov-Arnold网络（KANs）,是作者号称可以作为多层感知器（mlp）的有前途的替代品。

kan根本没有线性权矩阵：取而代之的是，每个权参数都被一个可学习的一维函数参数化为样条所取代。KANs节点只是简单地对输入信号求和，而不应用任何非线性。有人可能会担心，由于每个MLP的权重参数都变成了KAN的样条函数，因此KAN的成本非常昂贵。幸运的是，kan通常允许比mlp更小的计算结构。

如，文章表明，对于PDE求解，2层宽度-10的KAN比4层宽度-100的MLP（10^−7 vs 10^−5 MSE）精确100倍，参数效率高100倍（10^2 vs 10^4参数）。

## 理论基础

### Kolmogorov-Arnold表示定理

该定理指出，任何多变量的连续函数都可以表示为一组单变量连续函数和加法的有限组合。

公式形式：

$$f(x_1, x_2, \ldots, x_n) = \sum_{q=1}^{2n+1} \Phi_q \left( \sum_{p=1}^n \varphi_{q,p}(x_p) \right)$$

其中，$\varphi_{q,p}$ 和 $\Phi_q$ 是单变量函数。

定理本身揭示了多变量函数实际上可以通过单变量函数的组合构建。

学习一个高维函数可以归结为学习一个多项式数量的一维函数。然而，这些一维函数可能是非光滑的，甚至是分形的，因此在实践中可能无法学习。由于这种病态的行为，Kolmogorov-Arnold表示定理在机器学习中基本上被判了死刑，被认为是理论上合理但实际上毫无用处。然而，文章对Kolmogorov-Arnold定理在机器学习中的有用性更为乐观。首先，不需要拘谨于原始的Eq.，它只有两层非线性和隐藏层中少量的项（2n + 1）：我们将网络推广到任意的宽度和深度。其次，科学和日常生活中的大多数函数通常是光滑的，并且具有稀疏的组成结构，这可能有助于光滑的Kolmogorov-Arnold表示。

我们的物理世界和机器学习任务必须具有使物理和机器学习有用或可推广的结构。

### KAN 结构

- 这构成了一个原型 KAN，其中：
    - 中间层的宽度为 $2n+1$。
    - 激活函数位于边上，而非节点上。
    - 节点只执行简单的求和操作。

-  **KAN层的定义**：
    - 一个 KAN 层从输入维度 $n_{in}$ 到输出维度 $n_{out}$ 是由一个矩阵$\Phi = \{\varphi_{q,p}\}$表示的，其中每个 $\varphi_{q,p}$ 是可训练的一维函数。
    - 在Kolmogorov-Arnold定理中，$\varphi_{q,p}$构成一个具有输入维度$n = n_{in}$和输出维度 $2n+1 = n_{out}$的层，$\Phi_q$则构成从$2n+1$到1的层。
    - 公式化表示： $\Phi_l(x) = \sum_{j=1}^{n_l} \varphi_{l,i,j}(x_j), \quad i = 1, \ldots, n_{l+1}$这里$\varphi_{l,i,j}$是边上的激活函数。

-  **网络的层次化扩展**：
    - 基于上述定义，Kolmogorov-Arnold 表示定理仅描述了一个两层网络。
    - 为了构建更深的网络，文章提出了一种层叠 KAN 层的方法$KAN(x) = (\Phi_{L-1} \circ \Phi_{L-2} \circ \cdots \circ \Phi_0)(x)$ 其中每一层的$\Phi_l$是一个函数矩阵，由$\varphi_{l,i,j}$参数化。

