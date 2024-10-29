---
layout: null
title: 强化学习
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

# 基本概念

强化学习是区分与监督学习与无监督学习的第三类机器学习范式，监督学习的任务即是让系统在训练集上按照每个样本所对应的标签推断出应有的反馈机制，进而在未知标签的样本上能够计算出一个尽可能正确的结果，无监督学习是从无标签的数据集中发现隐藏的结构。但是强化学习的目标是最大化奖励而非寻找隐藏的数据集结构，尽管用无监督学习的方法寻找数据内在结构可以对强化学习任务起到帮助，但并未从根本上解决最大化奖励的问题。

参考：https://blog.csdn.net/weixin_45560318/article/details/112981006

https://zhuanlan.zhihu.com/p/466455380

强化学习（Reinforcement learning，RL）讨论的问题是一个智能体(agent) 怎么在一个复杂不确定的 环境(environment) 里面去极大化它能获得的奖励。通过感知所处环境的 状态(state) 对 动作(action) 的 反应(reward)， 来指导更好的动作，从而获得最大的 收益(return)。

在强化学习过程中，智能体跟环境一直在交互。智能体在环境里面获取到状态，智能体会利用这个状态输出一个动作，一个决策。然后这个决策会放到环境之中去，环境会根据智能体采取的决策，输出下一个状态以及当前的这个决策得到的奖励。智能体的目的就是为了尽可能多地从环境中获取奖励。

<img src="/assets/GhX0bkEhpo0Lcpx1KYwcO5qEngf.png" src-width="833" class="markdown-img m-auto" src-height="383" align="center"/>

环境(Environment) 是一个外部系统，智能体处于这个系统中，能够感知到这个系统并且能够基于感知到的状态做出一定的行动。

智能体(Agent) 是一个嵌入到环境中的系统，能够通过采取行动来改变环境的状态。

状态(State)/观察值(Observation)：状态是对世界的完整描述，不会隐藏世界的信息。观测是对状态的部分描述，可能会遗漏一些信息。

动作(Action)：不同的环境允许不同种类的动作，在给定的环境中，有效动作的集合经常被称为动作空间(action space)，包括离散动作空间(discrete action spaces)和连续动作空间(continuous action spaces)，例如，走迷宫机器人如果只有东南西北这 4 种移动方式，则其为离散动作空间;如果机器人向 360◦ 中的任意角度都可以移动，则为连续动作空间。

奖励(Reward)：是由环境给的一个标量的反馈信号(scalar feedback signal)，这个信号显示了智能体在某一步采 取了某个策略的表现如何

强化学习的基本要素：

强化学习系统一般包括四个要素：策略（policy），奖励（reward），价值（value）以及环境或者说是模型（model）

策略（Policy）

策略定义了智能体对于给定状态所做出的行为，换句话说，就是一个从状态到行为的映射，事实上状态包括了环境状态和智能体状态，这里我们是从智能体出发的，也就是指智能体所感知到的状态。因此我们可以知道策略是强化学习系统的核心，因为我们完全可以通过策略来确定每个状态下的行为。我们将策略的特点总结为以下三点：

1、策略定义智能体的行为

2、它是从状态到行为的映射

3、策略本身可以是具体的映射也可以是随机的分布

奖励（Reward）

奖励信号定义了强化学习问题的目标，在每个时间步骤内，环境向强化学习发出的标量值即为奖励，它能定义智能体表现好坏，类似人类感受到快乐或是痛苦。因此我们可以体会到奖励信号是影响策略的主要因素。我们将奖励的特点总结为以下三点：

1、奖励是一个标量的反馈信号

2、它能表征在某一步智能体的表现如何

3、智能体的任务就是使得一个时段内积累的总奖励值最大

价值（Value）

接下来说说价值，或者说价值函数，这是强化学习中非常重要的概念，与奖励的即时性不同，价值函数是对长期收益的衡量。我们常常会说“既要脚踏实地，也要仰望星空”，对价值函数的评估就是“仰望星空”，从一个长期的角度来评判当前行为的收益，而不仅仅盯着眼前的奖励。结合强化学习的目的，我们能很明确地体会到价值函数的重要性，事实上在很长的一段时间内，强化学习的研究就是集中在对价值的估计。我们将价值函数的特点总结为以下三点：

1、价值函数是对未来奖励的预测

2、它可以评估状态的好坏

3、价值函数的计算需要对状态之间的转移进行分析

环境（模型）

最后说说外界环境，也就是模型（Model），它是对环境的模拟，举个例子来理解，当给出了状态与行为后，有了模型我们就可以预测接下来的状态和对应的奖励。但我们要注意的一点是并非所有的强化学习系统都需要有一个模型，因此会有基于模型（Model-based）、不基于模型（Model-free）两种不同的方法，不基于模型的方法主要是通过对策略和价值函数分析进行学习。我们将模型的特点总结为以下两点：

1、模型可以预测环境下一步的表现

2、表现具体可由预测的状态和奖励来反映

原文链接：https://blog.csdn.net/weixin_45560318/article/details/112981006

# 强化学习分类

<img src="/assets/A0QcbeUhWok6nZxvpWxcCKCpnpd.png" src-width="987" class="markdown-img m-auto" src-height="511" align="center"/>

原文链接：https://zhuanlan.zhihu.com/p/466455380

Model-Free 不去理解环境，直接环境获得信息，Model-Based 去学习和理解环境，学会用一个模型来模拟环境，通过模拟的环境来得到反馈。Model-Based相当于比Model-Free多了模拟环境这个环节，通过模拟环境预判接下来会发生的所有情况，然后选择最佳的情况。

