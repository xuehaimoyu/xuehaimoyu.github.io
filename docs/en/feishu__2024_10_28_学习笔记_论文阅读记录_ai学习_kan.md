---
layout: null
title: KAN
hide: false
hide_child: false
keywords:
  - KAN
  - Study notes
  - learning_note
categories:
  - learning_note
create_time: 1732794896
---

# KAN

Link to article: https://arxiv.org/abs/2404.19756

## Overview

KAN is called Kolmogorov-Arnold networks (KANs) and is a promising alternative to multilayer perceptrons (mlp) that the authors claim.

kan doesn't have a linear weight matrix at all: instead, each weight parameter is replaced by a learnable one-dimensional function parameterized into a spline. The KANs node simply sums the input signals without applying any nonlinearity. One might worry that the cost of KAN is very expensive since the weight parameters of each MLP become a spline function of KAN. Fortunately, KAN generally allows for smaller computational structures than MLP.

For example, the paper shows that for the PDE solution, the KAN with a width of 2 layers at -10 is 100 times more accurate than the MLP with a width of 4 layers with a width of -100 (10^−7 vs 10^−5 MSE) and the parameter efficiency is 100 times higher (10^2 vs 10^4 parameters).

## Theoretical Basis

### Kolmogorov-Arnold denoting theorem

The theorem states that any multivariate continuous function can be expressed as a set of univariate continuous functions and a finite combination of addition.

Formula form:

$$f(x_1, x_2, \ldots, x_n) = \sum_{q=1}^{2n+1} \Phi_q \left( \sum_{p=1}^n \varphi_{q,p}(x_p) \right)$$

where $\varphi_{q,p}$ and $\Phi_q$ are univariate functions.

The theorem itself reveals that multivariate functions can actually be constructed from a combination of univariate functions.

Learning a high-dimensional function boils down to learning a one-dimensional function with a polynomial number. However, these one-dimensional functions may be non-smooth or even fractal, and therefore may not be learnable in practice. As a result of this pathological behavior, Kolmogorov-Arnold said that the theorem was essentially a death sentence in machine learning, considered theoretically plausible but practically useless. However, the paper is more optimistic about the usefulness of the Kolmogorov-Arnold theorem in machine learning. First of all, there is no need to be rigid with the original Eq., which has only two layers of nonlinearity and a small number of terms in the hidden layer (2n + 1): we generalize the network to arbitrary widths and depths. Second, most functions in science and everyday life are generally smooth and have a sparse compositional structure, which may contribute to a smooth Kolmogorov-Arnold representation.

Our physical world and machine learning tasks must have structures that make physics and machine learning useful or generalizable.

### KAN structure

- This constitutes a prototype KAN where:
    - The width of the middle layer is $2n+1$.
    - The activation function is on the edge, not the node.- Nodes perform only simple summation operations.

- **Definition of KAN layer**:
    - A KAN layer from the input dimension $n_{in}$ to the output dimension $n_{out}$ is represented by a matrix $\Phi = \{\varphi_{q,p}\}$, where each $\varphi_{q,p}$ is a trainable one-dimensional function.
    - In the Kolmogorov-Arnold theorem, $\varphi_{q,p}$ constitutes a layer with an input dimension $n = n_{in}$ and an output dimension $2n+1 = n_{out}$, and $\Phi_q$ a layer from $2n+1$ to 1.
    - Formulaic representation: $\Phi_l(x) = \sum_{j=1}^{n_l} \varphi_{l,i,j}(x_j), \quad i = 1, \ldots, n_{l+1}$ where $\varphi_{l,i,j}$ is the activation function on the edge.

- **Hierarchical Expansion of the Network**:
    - Based on the above definition, Kolmogorov-Arnold stated that the theorem describes only a two-layer network.
    - In order to build a deeper network,the paper proposes a method of cascading KAN layers$KAN(x) = (\Phi_{L-1} \circ \Phi_{L-2} \circ \cdots \circ \Phi_0)(x)$ where $\Phi_l$ for each layer is a function matrix, parameterized by $\varphi_{l,i,j}$.