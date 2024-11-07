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

# Basic Concepts

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

# Reinforcement Learning Classification

<img src="/assets/A0QcbeUhWok6nZxvpWxcCKCpnpd.png" src-width="987" class="markdown-img m-auto" src-height="511" align="center"/>
Original link: https://zhuanlan.zhihu.com/p/466455380

Model-Free does not understand the environment, but obtains information directly from the environment, Model-Based learns and understands the environment, learns to use a model to simulate the environment, and gets feedback through the simulated environment. Model-Based is equivalent to a simulated environment that predicts everything that will happen next and then selects the best scenario through Model-Free.