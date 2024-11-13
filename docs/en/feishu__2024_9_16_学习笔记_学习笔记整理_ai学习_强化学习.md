---
layout: null
title: Reinforcement Learning
hide: false
hide_child: false
keywords:
  - learning_note
categories:
  - learning_note
create_time: 1729040741
---

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[43%]" width-ratio="43">
<img src="/assets/JGwFbkva6oD6p2xZgEqccydrn7e.png" src-width="868" class="markdown-img m-auto" src-height="861" align="center"/>
</div>
<div class="w-[56%]" width-ratio="56">
<img src="/assets/K44Qbj174o54WXxtnMwctgwOnJf.png" src-width="638" class="markdown-img m-auto" src-height="479" align="center"/>
</div>
</div>

## Basic Concepts

Reinforcement learning is the third type of machine learning paradigm that distinguishes supervised learning from unsupervised learning, the task of supervised learning is to let the system infer the due feedback mechanism according to the corresponding label of each sample on the training set, and then calculate a result as correct as possible on the samples with unknown labels, and unsupervised learning is to discover the hidden structure in the unlabeled data set. However, the goal of reinforcement learning is to maximize the reward rather than finding the hidden dataset structure, and although the method of unsupervised learning to find the intrinsic structure of the data can help the reinforcement learning task, it does not fundamentally solve the problem of maximizing the reward.

Reference: https://blog.csdn.net/weixin_45560318/article/details/112981006

https://zhuanlan.zhihu.com/p/466455380

Reinforcement learning (RL) discusses how an agent maximizes the rewards it can receive in a complex and uncertain environment. By perceiving the state of the environment and the response to the action, you can guide better actions to get the most return.

In reinforcement learning, the agent interacts with the environment all the time. The agent obtains a state in the environment, and the agent uses this state to output an action and a decision. This decision is then put into the environment, and the environment outputs the next state and the reward for the current decision based on the decision taken by the agent. The purpose of an agent is to get as many rewards as possible from the environment.

<img src="/assets/GhX0bkEhpo0Lcpx1KYwcO5qEngf.png" src-width="833" class="markdown-img m-auto" src-height="383" align="center"/>
The environment is an external system in which the agent is aware of the system and can act based on the perceived state.

An agent is a system embedded in the environment that can change the state of the environment by taking actions.

State/Observation: A state is a complete description of the world and does not hide information about the world. An observation is a partial description of the state and some information may be missing.

Action: Different environments allow different kinds of actions, in a given environment, the set of effective actions is often called action space, including discrete action spaces and continuous action spaces, for example, if a maze walking robot only has four movement modes, it is a discrete action space; If the robot can move at any angle in 360◦, it is a continuous motion space.

Reward: A scalar feedback signal given by the environment that shows how well the agent has performed at a certain step in adopting a strategy

Essential Elements of Reinforcement Learning:

Reinforcement learning systems generally consist of four elements: policy, reward, value, and environment or modelPolicy

A policy defines the behavior of an agent for a given state, in other words, it is a mapping from state to behavior, in fact, the state includes the state of the environment and the state of the agent, here we start from the agent, that is, the state perceived by the agent. So we can know that policies are at the heart of reinforcement learning systems, because we can use policies to determine the behavior in each state. We summarize the characteristics of the strategy in the following three points:

1. The policy defines the behavior of the agent

2. It is a mapping from state to behavior

3. The strategy itself can be a specific mapping or a random distribution

Reward

Reward signals define the goal of the reinforcement learning problem, and at each time step, the scalar value emitted by the environment to reinforcement learning is the reward, which defines how well the agent behaves, similar to how happy or painful a human feels. Therefore, we can appreciate that the reward signal is the main factor influencing the strategy. We summarize the characteristics of the reward into the following three points:

1. Reward is a scalar feedback signal

2. It can characterize how well an agent performs at a certain step

3. The task of the agent is to maximize the total reward value accumulated in a period of time

Value

Next, let's talk about value, or value function, which is a very important concept in reinforcement learning, and unlike the immediacy of rewards, the value function is a measure of long-term benefits. We often say "keep your feet on the ground and look up to the stars", and the evaluation of the value function is "looking up to the stars", judging the benefits of current actions from a long-term perspective, not just staring at the immediate rewards. Combined with the purpose of reinforcement learning, we can clearly appreciate the importance of value function, in fact, for a long time, reinforcement learning research has focused on the estimation of value. We summarize the characteristics of the value function into the following three points:

1. The value function is a prediction of future rewards

2. It can evaluate the quality of the state

3. The calculation of the value function requires the analysis of the transition between states

Environment (Model)

Finally, let's talk about the external environment, that is, the model, which is a simulation of the environment, for example, when the state and behavior are given, with the model we can predict the next state and the corresponding reward. However, it is important to note that not all reinforcement learning systems need to have a model, so there are two different approaches: model-based and model-free, and the non-model-based approach is mainly through strategy and value function analysis. We summarize the characteristics of the model into the following two points:

1. The model can predict the next performance of the environment

2. The specific performance can be reflected by the predicted state and reward

Original link: https://blog.csdn.net/weixin_45560318/article/details/112981006

## Reinforcement Learning Classification

<img src="/assets/A0QcbeUhWok6nZxvpWxcCKCpnpd.png" src-width="987" class="markdown-img m-auto" src-height="511" align="center"/>
Original link: https://zhuanlan.zhihu.com/p/466455380

Model-Free does not understand the environment, but obtains information directly from the environment, Model-Based learns and understands the environment, learns to use a model to simulate the environment, and gets feedback through the simulated environment. Model-Based is equivalent to a simulated environment that predicts everything that will happen next and then selects the best scenario through Model-Free.

## Markov chainThe Markov Chain is a mathematical model used to describe the process of state transition, which randomly jumps between a series of possible states, and its next state depends only on the current state, regardless of the previous state. This trait is known as "Markovness" or "no memory".

### The basic elements of the Markov chain

1. State Space All possible states of a Markov chain constitute a state space, usually represented as a finite set or an infinite set. For example, a state space can be a finite number of states, or it can be a continuous interval on a number line.

1. Probability of Transition In a Markov chain, the probability of transferring from one state to another is known as the probability of transfer. Assuming that the current state is \( s \) and the next state is \( s' \), the probability of moving from \( s \) to \( s' \) is expressed as:

\[

P(s'|s) = \Pr(X_{t+1} = s' \mid X_t = s)

\]

where \( X_t \) represents the state at time \( t \). The transition probability is usually represented by the transition matrix \( P \), where each element in the matrix \( P_{ij} \) represents the probability of moving from state \( i \) to state \( j \).

1. Initial State DistributionThe initial state of a Markov chain can be selected based on a probability distribution. For example, if the chain is in state \( s_0 \) at time \( t=0 \), the initial distribution is \(\Pr(X_0 = s_0)\).

1. No memory (Markovness) An important property of the Markov chain is "no memory", that is, the transfer of the current state depends only on the current state and is not affected by the previous sequence of states. For any moment \( t \), there is

\[

\Pr(X_{t+1} = s' \mid X_t = s, X_{t-1} = s_{t-1}, \dots, X_0 = s_0) = \Pr(X_{t+1} = s' \mid X_t = s)

\]

### Types of Markov chains

1. A homogeneous Markov chain is said to be homogeneous (or time-invariant) Markov chain if the probability \( P( s'|s) \) from state \( s \) to state \( s' \) does not change with time at each moment \( t \). The transition matrix of the homogeneous Markov chain remains the same for all time steps.

1. Non-homogeneous Markov chain If the transfer probability changes with time, it is called a non-homogeneous Markov chain. At this point, the transition matrix \( P \) is dependent on time \( t \) and the transition probability may be different for each time step.

### The importance of the Markov chain

1. Stationary DistributionFor homogeneous Markov chains, if there is a probability distribution \(\pi\), the distribution is unchanged after the state transition, i.e

\[

\pi P = \pi

\]

then \(\pi\) is the steady-state distribution (or stationary distribution) of the Markov chain. The steady-state distribution indicates that the Markov chain will stabilize after a sufficient number of time steps.

1. Ergodicity A Markov chain is said to be traversal if it is able to access all other states in the state space from any state after a sufficient period of time. This Markov chain will eventually tend to a steady-state distribution, regardless of the initial state.

1. Irreducibility A Markov chain is said to be irreducible if it has access to all other states. Reducibility is often necessary to achieve ergodability.

1. Periodicity If a state can only be returned at certain fixed intervals, the state is said to be periodic, and the Markov chain is also periodic. If the period of all states is 1 (i.e., it can be returned at any time), the chain is said to be aperiodic (i.e., aperiodic Markov chain).1. Convergence**For irreducible and non-periodic Markov chains, the state distribution of the chain converges to a steady-state distribution when \( t \to \infty \).

### Application of Markov chains

Markov chains are widely used in several fields, such as:

- Economics: Used to model transitions between economic states, such as changes in market growth, recession, boom, and so on.
- Biology: Used to model changes in the state of gene sequences, ecosystems, etc.
- Computer Science: Used to predict sequence patterns and search algorithms in areas such as natural language processing, information retrieval, etc.
- Engineering: In the reliability analysis of the system, the Markov chain models the changes in the state of the equipment, such as the operation, failure, etc.

---

### Example: Simple weather model

Suppose a simple weather system has two states: Sunny (S) and Rainy (R). In this system, the weather for each day depends only on the weather of the previous day, and the probability of transfer is as follows:

- If it's sunny today, there's a 70% chance that it will still be sunny tomorrow and a 30% chance it'll be rainy.
- If it's raining today, there's a 40% chance that it will be sunny tomorrow and a 60% chance that it will continue to rain.

Its state transition matrix \( P \) is:

\[

P = \begin{bmatrix} 

0.7 & 0.3 \\ 

0.4 & 0.6 

\end{bmatrix}

\]

Here, the state transition matrix \( P \) represents the probability distribution from one state to the next. After multiple shifts, the system tends to a stable probability distribution that represents the long-term ratio of sunny and rainy days.

---

The Markov chain model is simple but powerful, and provides an effective tool for modeling and analyzing stochastic processes.