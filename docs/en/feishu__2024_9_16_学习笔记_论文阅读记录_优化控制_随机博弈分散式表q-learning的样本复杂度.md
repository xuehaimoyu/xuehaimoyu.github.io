---
layout: null
title: Sample complexity of decentralized table q-learning in random games
hide: false
hide_child: false
keywords:
  - Study notes
  - Reinforcement learning
categories:
  - learning_note
create_time: 1729040184
---

Link to the article: https://ieeexplore.ieee.org/document/10155822

## Summary

In this paper, a finite-sample analysis of the dispersed Q-learning algorithm is carried out in a tabular setting, which includes potential countermeasures and the Markov team problem as special cases, for an important subclass of general and stochastic countermeasures, weak loopless stochastic countermeasures. In a practical and challenging decentralized setup, each agent is unable to observe the rewards and behaviors of the others. In fact, each subject can completely ignore the presence of other decision-makers. In this paper, the sample complexity of the distributed table Q-learning algorithm in [1] converges to Markov's perfect equilibrium.

This paper focuses on the learning problem of multi-agent stochastic games, especially the challenge of achieving effective learning in a decentralized environment without central control. In this scenario, each agent can only obtain partial information (its own state and reward), but cannot obtain the actions and rewards of other agents. The research focuses on weak-loop stochastic games, which include latent games and Markov team problems. In this type of game, if the agents follow the best reply strategy, the system can avoid falling into irreversible oscillations under certain conditions. Therefore, the weak cycle game is considered to have the potential to achieve stable equilibrium

## Introduction & Background

Multi-agent learning has become a hot area of research in recent years, especially in applications that require multiple agents to collaborate in the same environment to complete tasks, such as network routing, energy distribution, traffic control, robotic systems, and socio-economic problems. In these systems, agents (also known as "agents") learn how to accomplish tasks by interacting with their environment, and there is no complete partnership between the agents. The introduction highlights the complexity of the interactions between agents in this multi-agent environment: the behavior of each agent affects the environment as a whole, and thus the decision-making processes of the other agents.

More specific research questions:

Stochastic Games, also known as Markov Games, are a classic framework for modeling dynamic multi-agent interactions. Stochastic games differ from repeated games in that they not only focus on the independent decision-making of each stage, but also take into account the state changes between the stages – the state of the current stage is determined by the joint actions of the agents in the previous stage. This dynamic nature makes stochastic games suitable for a wider range of problem settings, such as agents that may or may not be in a network.

Stochastic games include a variety of scenarios: for example, a zero-sum game with two agents (where an agent's reward is negative to indicate a competitive relationship) and a multi-agent general sum game (where each agent has an independent reward function and there may be multiple agents). In addition, random games can be time-limited or indefinite-time, and the agent's goal is to choose a strategy to maximize its total reward (if time is limited) or discounted reward (if time is indefinite).

In multi-agent games, one of the most commonly studied equilibrium concepts is the "Markov Perfect Equilibrium" (MPE). This equilibrium means that each agent's strategy must not only be the best response to the current state, but also the best response of all other agents in the joint strategy, i.e., all agents achieve the best return through each other's combination of strategies. Markov perfect equilibrium is a subgame perfect equilibrium, which means that the agent's strategy is locally optimal in each state, so as to obtain the overall long-term benefits.

With the rise of reinforcement learning, the application of reinforcement learning methods to random games has attracted more and more attention. In a multi-agent system, multiple agents interact with a random environment through trial and error, so as to learn strategies in an uncertain environment. Q learning in reinforcement learning is a typical example, but in multi-agent systems, it faces a unique challenge—in a distributed environment, each agent cannot observe the rewards and actions of other agents, so the convergence of Q learning is difficult to guarantee.

Reinforcement learning algorithms can be divided into two categories: centralized and decentralized:

- In a centralized algorithm, there is a central controller that can access and coordinate the reward and policy information of all agents.
- In the decentralized algorithm,each agent makes independent decisions based on local information,and the convergence of the learning algorithm in this environment is difficult to guarantee,because the state and reward of the multi-agent system depend on the joint action of all agents,so the environment faced by each agent is nonstationary.

The introduction points out that in a multi-agent system, since the strategies of all agents are changing and the environment is nonstationary, direct extension of the learning algorithm of a single agent (such as Q learning) may lead to non-convergence. Solving the problem of nonstationarity is a key challenge when developing distributed learning algorithms.

In order to solve this problem, a distributed Q learning algorithm has been proposed. In this algorithm, each agent keeps the policy unchanged for a long enough time at different times (called the "exploration phase") that the environment is approximately static for each agent for a short period of time. During the exploratory phase, the agent updates the Q value, while the policy update is based on the Q value at the end of the exploratory phase. This method of "explore first and then update" is repeated so that the joint strategy of the agents gradually converges to Markov perfect equilibrium.

On the basis of the above research, this paper further investigates the sample complexity of the distributed Q-learning algorithm, that is, the number of samples required for the algorithm to converge to a perfect Markov equilibrium in the case of a finite number of samples. In this paper, the following new results are proposed:

- For the first time, the sample complexity of multi-agent general and random games is derived, and the relationship between the sample complexity and game parameters is demonstrated.
- A Upper and Lower bound estimation of sample complexity is proposed, and the non-dominant problem of some implicit parameters (e.g., minimum steady-state distribution probability and mixing time) is solved.
- In order to ensure convergence to equilibrium,this paper expands the theory of weak cyclic games,puts forward some necessary assumptions,and improves the algorithm to support non-progressive convergence.Decentralized Q-learning specific reference articles:

https://arxiv.org/abs/1506.07924

This article focuses in particular on an important subclass of general and random games: weakly acyclic stochastic games. This subclass contains the following two special types of games:

1. **Potential Games**
Latent game is a special form of game in which the strategy adjustment of all agents can be regarded as optimizing the same latent function. Therefore, the change of the strategy of any agent will lead to a change in the value of this latent function, so that the system will gradually evolve towards an equilibrium state. The structural characteristics of this game allow each agent to gradually adjust its strategy to achieve a stable equilibrium locally or globally.
2. Markov Team Problems
In the Markov team problem, all agents share a common goal, which is to maximize the total return of the entire team. Each agent's strategy is tuned to optimize this common objective function, which is similar to the latent game, but with a greater focus on collaboration. The interaction between agents is not in competition with each other, but in order to achieve the overall optimality of the team.

### Why choose a weak-cycle random game as a research subclass?

An important feature of weak-loop stochastic games is that in this type of game, each agent can gradually adjust its strategy through the "Best Reply Path", so as to avoid falling into an irreversible cyclic state and finally converge to a stable equilibrium. This structural feature makes it particularly suitable for the study of distributed learning algorithms, because the agent can gradually adjust to an equilibrium strategy combination without directly observing the behavior of other agents. This type of game structure ensures the convergence of the algorithm in an uncertain multi-agent environment.

## Related Concepts

The second section of the paper mainly introduces the relevant preliminary knowledge of Weak Loop Stochastic Game and Best Reply Process with Inertia, and provides a theoretical basis for subsequent algorithm analysis. This section defines the formal description of the weak-cycle random game in detail, gives the mathematical definition of the agent's return function and optimal strategy, and clarifies how to gradually converge to equilibrium through a specific optimal recovery path in the weak-cycle game. The following is a detailed analysis of the content of the second section and the explanation of the formula:

In the article, a stochastic game is described as a multi-agent dynamic system with finite states and action sets, formally defined as follows:

- Agent Collection: Suppose there are N agents, each labeled $i,i \in \{1, \dots, N\}$.
- State set S: This is the state space of the game, representing all possible states of the system.
- Action set$A_i$: Each agent i has its own set of actions $A_i$, representing all possible actions that the agent can take. The system's joint action set is $A = A_1 \times \dots \times A_N$.
- Reward function$r_i(s, a_1, \dots, a_N)$: represents the instant reward received by the i-th agent when all agents choose the joint action $a = (a_1, \dots, a_N)$ in state s∈S. Reward functions can take different forms, but are usually non-negative.
- Discount factor$\gamma_i in (0,1)$: Each agent has its own discount factor that is used to calculate the discounted value of future rewards.
- State transition probability P(s'|s, a): The probability that the system will move to the next state s', given the current state s and joint action a. This is a central feature of the Markov decision-making process, which means that the current state and joint actions determine the probability distribution of the future state.

The agent's strategy and value function

For each agent i, the goal is to find an optimal strategy to maximize its cumulative expected discounted reward in a random game. In this article, a policy is defined as a rule by which an agent selects an action in a given state.

- Strategy$\pi_i$: An agent's strategy is a function mapped from state space S to action space $A_i$, representing the rules for agents to choose actions in different states. This article focuses on static policies, which are always the same policy in each state.
- Value function$V_i(s)$: For strategy $\pi$, the value function of agent i in state s is defined as:
- $$V_i^{\pi}(s) = \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma_i^t r_i(s_t, a_t) \mid s_0 = s\right]$$
- The expectation is calculated based on the joint strategy $\pi$ and the system's transition probability. The value function represents the cumulative discounted reward for executing a sequence of actions according to the strategy $\pi$ from state s.
- Q-value function: The Q-value function is defined as the long-term expected return for selecting an action a in state s, and the Q-function is defined as follows:
- $$Q_i^{\pi}(s, a_i) = \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma_i^t r_i(s_t, a_i, a_{-i}) \mid s_0 = s, a_0^i = a_i\right]$$
- where $a_{-i}$ represents the joint actions of agents other than agent i. The Q function is used to help the agent choose the optimal action in each state.

### The definition of a perfect equilibrium in Markov

This paper defines an important equilibrium concept in weak-cyclic random games, namely Markov Perfect Equilibrium (MPE). Under MPE, the policy of each agent is the optimal response to the policy of all other agents. The mathematical definition of MPE is:

If the policy portfolio $\pi^* = (\pi_1^*, \dots, \pi_N^*)$ satisfies the following conditions, it is called MPE:

$$V_i^{(\pi_i^*, \pi_{-i}^*)}(s) \geq V_i^{(\pi_i, \pi_{-i}^*)}(s), \quad \forall s \in S, \forall \pi_i \in \Pi_i, \forall i$$

where $\pi_{-i}^*$ represents the equilibrium strategy combination of agents other than agent i. This condition shows that under the equilibrium strategy combination, the strategy of each agent is optimal, and there is no motivation to deviate.#### Best Response Strategy

It is defined as a strategy that maximizes the agent's own benefits while other agent strategies remain the same.

For each agent $(i)$ and its strategy combination $(\pi_{-i})$ (i.e., the policy combination of all agents except agent $(i)$), if the strategy $(\pi_i^*)$ exists, the following conditions are true:

$$
V_i^{(\pi_i^*, \pi_{-i})}(s) = \max_{\pi_i \in \Delta_i} V_i^{(\pi_i, \pi_{-i})}(s), \quad \forall s \in S$$

Then $(\pi_i^*)$ is the best reply strategy for agent $(i)$ under the strategy combination $(\pi_{-i})$.

Thereinto:

- $(V_i^{(\pi_i, \pi_{-i})}(s))$ represents the value function of agent i in the case of its own strategy $\pi_i$ and other agent strategies $\pi_{-i}$ in state $s$ (i.e., the expected cumulative discounted reward that agent i can receive).
- $\Delta_i$ represents the set of all possible strategies for agent i.

In other words, the optimal recovery strategy $\pi_i^*$ is the one that maximizes the expected return of agent i while the other agent strategies remain constant.

#### Strictly best respond

If, in a state $s \in S$, the policy $\pi_i^*$ is strictly better than the other strategy $\pi_i$, that is:

$$[
V_i^{(\pi_i^*, \pi_{-i})}(s) > V_i^{(\pi_i, \pi_{-i})}(s)
]$$

Then call $\pi_i^*$ the Strict Optimal Reply Strategy for Agent I. Strict optimal response means that the agent has a stronger incentive to deviate from the strategy in certain states.

### Weak Cyclic Game and Optimal Recovery Path

A weak cyclic game is a special game structure in which there is a path from an arbitrary combination of strategies to an equilibrium combination of strategies. That is to say, even though there may be a loop of policy adjustment in the system, as long as the agent adjusts the strategy according to the optimal recovery path, the system can eventually converge to a certain equilibrium point. In this paper, the strict optimal response path is used to describe the sequence of such a strategy adjustment:

- Strict optimal recovery path: A series of strategy combinations $\pi_0, \pi_1, \dots, \pi_T$, each of which is adjusted by one of the agent's optimal strategies. In other words, starting from an unbalanced strategy, the system finally reaches the equilibrium strategy combination through the adjustment of the optimal recovery strategy again and again.

Suppose we have a series of policy combinations $\pi^0, \pi^1, \dots, \pi^K$, which is called a strictly optimal reply path if for each $k\geq0$ satisfies the following conditions:

$\pi^{k+1}$ differs from $\pi^k$ only in the policy of one agent (i.e., only one agent updates the policy).

The updated policy is a strictly optimal response, i.e., suppose agent $i$ chooses the new strategy $\pi_i^{k+1}$ in $\pi^k$, and $$ [
 \pi_i^{k+1} \in \arg\max_{\pi_i \in \Delta_i} V_i^{(\pi_i, \pi_{-i}^k)}(s)
 ]$$

This means that the new strategy of agent $i$ is a strictly optimal reply relative to the current policy combination of other agents $\pi_{-i}^k$.

In a weak cyclic game, each combination of non-equilibrium strategies has at least one such optimal recovery path, which ensures that the system can reach equilibrium after appropriate adjustments.

A random game is called a weak-loop random game if it satisfies the following conditions:- There is a strict optimal response path from any combination of strategies to a balanced combination of strategies.

In other words, in a weak-loop random game, starting from any initial combination of strategies, the agent will always be able to finally converge to a certain equilibrium point through a series of strict optimal recovery paths.

### Optimal recovery process and inertial mechanism

If there is no loop in the strict best response diagram of the game, we can consider the process of switching only one agent to one best response at each step, and this process will continue until no agent has a strict best response, and the joint strategy of all agents is a deterministic equilibrium joint strategy. However, as mentioned above, the strict optimal response diagram for weak acyclic countermeasures may contain rings. Next, we introduce the optimal response process with inertia as Algorithm 0, which assigns each agent a strictly positive probability of choosing each of its strict best responses.

In order to solve the problem of frequent policy changes between agents in multi-agent games, this paper proposes an Optimal Reply Process with Inertia (BRPI). In BRPI, each agent does not always immediately adopt the new optimal strategy when adjusting the strategy, but has a certain probability of retaining the current strategy. This process is described by the following pseudocode:

BRPI Algorithm:

- Input Parameters: The inertial parameter of each agent i $\lambda_i \in (0, 1)$.
- Initialize: Select an initial policy for each agent.
-**Process**:
    1. Remain unchanged each time the policy is updated if the current policy is the optimal response strategy.
    2. Otherwise, the agent keeps the current strategy with a probability of $\lambda_i$ and chooses a new optimal recovery strategy with a probability of $1-\lambda_i$.
    
<img src="/assets/X8H1bDykqoyzNoxnbzjc8qA4nJg.bmp" src-width="1018" class="markdown-img m-auto" src-height="516" align="center"/>
The core idea of BRPI is to introduce inertial parameters, so that the agent has a certain degree of conservatism when adjusting the strategy, so as to reduce the system instability caused by frequent policy changes. The inertial mechanism ensures that the system gradually converges to equilibrium as it adjusts the strategy.

### Formula Explained

- Value function formula$V_i^{\pi}(s)$ : represents the cumulative expected reward that agent iii can receive from state s under strategy $\pi$. Through recursive iterative calculations, this formula helps agents evaluate the long-term benefits of different strategies.
- Q function formula: $Q_i^{\pi}(s, a_i)$: For a given strategy, the Q function describes the long-term return expectation for each state-action pair, and is used to help the agent choose the optimal action in each state.
- **MPE Conditional Formula** $V_i^{(\pi_i^*, \pi_{-i}^*)}(s) \geq V_i^{(\pi_i, \pi_{-i}^*)}(s)$: indicates that in the equilibrium state, each agent has no incentive to deviate from its own strategy under the premise that the strategies of other agents remain unchanged.

To sum up, the second section defines the basic concept of weak-cycle stochastic game in detail, analyzes the characteristics of the optimal recovery path, and ensures the convergence of strategy adjustment through the BRPI mechanism, which provides a solid theoretical basis for the subsequent algorithm and sample complexity analysis.

## Algorithm and complexity analysis

Background：

In a decentralized multi-agent system, each agent can only observe its own state and the rewards obtained, but cannot observe the actions and rewards of other agents. Under this setting, the multi-agent policy selection leads to the non-stationarity of the system environment, that is, the environment seen by each agent in the learning process is constantly changing due to the decisions of other agents, which makes it difficult to ensure the convergence of traditional Q learning methods.

In order to solve these challenges, this paper introduces a decentralized Q learning algorithm, so that each agent can gradually converge to a stable equilibrium state through a phased policy update process. The algorithm is based on a phased policy update, known as the Exploration Phase and the Policy Update Phase. At each exploration stage, the agent keeps the strategy unchanged for a period of time, making the environment approximately static for each agent at this stage, so that each agent can update its Q-value table using the Q learning method. At the end of each exploration phase, the agent updates the policy based on the current Q table.

### Specific algorithm:

<img src="/assets/Rm93ba9rAotYekxwKbmcyVvUnRe.bmp" src-width="937" class="markdown-img m-auto" src-height="1202" align="center"/>
Initialization phase

- Q-Table Initialization: For each agent iii, initialize Q-table $Q_i(s, a_i) = 0$. The Q table is used to store estimates for each state-action pair, i.e., the expected return for that state-action pair.
- Policy Initialization: Set the initial policy $\pi_i^0$ for each agent.
- Start State and Phase Count: Set the initial state to $s_0$ and set the stage counter k to 1.The algorithm alternates between the Exploration Phase and the Policy Update Phase in a loop until the convergence condition is met.

**Exploratory Phase**

- Time-step loop: During the k-th exploration phase, each agent keeps the current strategy unchanged and performs actions on multiple time steps.
- Action Selection: Agent i selects an action using the $\epsilon$ greedy strategy. i.e. in the current state $s_t$:
    - Select an action based on the current strategy with a probability of $1 - \rho_i$, i.e. select the action corresponding to the current strategy in the Q table.
    - Exploration is achieved by choosing a random action with a probability of $\rho_i$.
    
- **Perform an action and update Q Sheet**:
    - The agent performs the selected action $a_i^t$ and observes the immediate reward of $r_i$ and the next state $s_{t+1}$.
    - Update the Q value according to the update formula of Q learning:
        $$Q_i(s_t, a_i^t) \leftarrow (1 - \eta_i) Q_i(s_t, a_i^t) + \eta_i \left( r_i + \gamma \max_{a'} Q_i(s_{t+1}, a') \right)$$
        - Where: $\eta_i$ is the learning rate, which controls the speed at which the Q value is updated.
        - $\gamma$ is the discount factor, which indicates the weight of future rewards.
        - $\max_{a'} Q_i(s_{t+1}, a')$ represents the maximum future return that the agent can get from the next state $s_{t+1}$.

- This process is repeated at each time step within the exploration phase until the end of the exploration phase.

**Policy Update Phase**

- At the end of the exploration phase, enter the policy update phase.
- Policy Update: Each agent i updates policy $\pi_i$ based on the current Q table $Q_i$.
    - If the current strategy is already optimal, it will remain unchanged with the probability of $\lambda_i$.
    - Otherwise, with a probability of $1 - \lambda_i$, the new best reply strategy is selected (i.e. the action that makes the highest Q value is selected as the new strategy in the current state).

- This policy update uses the Optimal Recovery Process with Inertia (BRPI), which introduces conservatism through the inertia parameter $\lambda_i$ to avoid frequent policy changes and improve the stability of the system.

**GO TO THE NEXT STAGE**

- After the policy update is complete, increase the stage count k = k + 1 and move on to the next round of exploration and policy update loops.

### Two key assumptions for non-asymptotic convergence guarantees

In this section, the authors introduce two key assumptions (Assumption 1 and Assumption 2) to ensure the sample complexity analysis of the algorithm in weak non-cyclic games.

#### Assumption 1

Suppose there is a constant $\kappa > 0$ and a finite integer $H \geq 1$, such that for the arbitrary state pair $(s', s)$, there is a series of joint actions $a_0, \ldots, a_{H-1} \in A$, so that the following conditions are true:

$$P[s_H = s' | (s_0, a_0, \ldots, a_{H-1}) = (s, a_0, \ldots, a_{H-1})] \geq \kappa。 $$

The implication of this assumption is that there is a certain probability of reaching the target state $s'$ from any initial state $s$ through a specific sequence of joint actions, and the lower bound of the probability is given by the constant $\kappa$. Combined with the definition $\pi_k$ in the $k$ exploration phase, each agent has a certain probability of choosing any action at any time. This probability, combined with Hypothesis 1, ensures that the Markov chain guided by the joint strategy $\pi_k$ is irrecommentable.

#### Assumption 2

Suppose that for any joint strategy $\pi_k$, the induced Markov chain is aperiodic.

Irreducibility ensures that each state can be accessed during the exploration phase, which allows the algorithm to update the Q table without making the Q learning incomplete because some states are inaccessible.Aperiodicity means that the state of the system does not fall into a specific cyclic pattern, which helps the agent to explore different states more flexibly, thus improving the efficiency of policy learning.

In sample complexity analysis for single-agent Q learning, it is often assumed that the behavioral strategy of the Markov chain is traversive. Hypothesis 1 and hypothesis 2 ensure that the Markov chain is finite, irreducible, and aperiodic, i.e., it is uniformly traversal and has a unique stationary distribution.

Next, define the stationary distribution of Markov chains induced by the strategy $\pi_k$ and introduce relevant variables:

1. **Stationary Distribution** Let $\mu_{\pi_k}$ denote the stationary distribution of the Markov chain induced by $\pi_k$ across all states, and $\mu^i_{\pi_k}$ denotes the stationary distribution of agent i over all state-action pairs $(s, a^i) \in S \times A^i$.

2. **Minimum stationary distribution probability** Define the minimum stationary distribution probability $\mu_{\text{min}, k}$ as:

$ \mu_{\text{min}, k} := \min_{i \in [N]} \min_{(s, a^i) \in S \times A^i} \mu^i_{\pi_k}(s, a^i)$

This variable represents the minimum stationary distribution probability for all state-action pairs from each agent's point of view. When $\mu_{\text{min}, k}$ is smaller, more samples are needed to ensure that all state-action pairs are adequately accessed in the $k$ sub-exploration phase.

3. **Mixing time** For the mixing time of agent i in the kth exploration phase, it is defined as:

$ t^i_{\text{mix}, k}(\alpha) := \min \left\{ t \Big| \max_{(s_0, a^i_0) \in S \times A^i} d_{\text{TV}}\left(P^t(\cdot | s_0, a^i_0), \mu^i_{\pi_k}\right) \leq \alpha \right\}$

where $\alpha \in (0, 1)$,$P^t(\cdot | s_0, a^i_0)$ is the distribution of $t$ at the moment of $(s_0, a^i_0)$ for the initial state-action pair, and $d_{\text{TV}}$ is the total variation distance. The mixing time describes the time it takes for a Markov chain to move from an initial state-action pair to a stationary distribution.

4. Minimum Separation: Define the minimum separation between the optimal Q functions of all agents $\zeta$ as the upper bound of the tolerance threshold:

$$ \zeta := \min_{i, s, a^i, \tilde{a}^i, \pi^{-i} \in \Pi^{-i}: Q^i_{\pi^{-i}}(s, a^i) \neq Q^i_{\pi^{-i}}(s, \tilde{a}^i)} \left| Q^i_{\pi^{-i}}(s, a^i) - Q^i_{\pi^{-i}}(s, \tilde{a}^i) \right|$$

Finally, the main theorem of algorithm sample complexity (Theorem 1) is defined, and the upper and lower bounds of the minimum stationary distribution probability and mixing time are derived in the subsequent content

---

### Theorem 1: Non-asymptotic convergence and sample complexity

Theorem 1

Consider a weakly non-cyclic discounted stochastic game with strict best replies. Suppose each agent updates its strategy according to algorithm 1 and satisfies assumptions 1 and 2. Then for any $0 < \delta < 1$, there are constants $c_0$ and $c_1$, such that for all $k \geq K$, there is the following result:

$$P[\pi_k \in \Pi_{\text{eq}}] \geq 1 - \delta$$

Where, if for all $i \in [N]$ and $k \in [K]$, the following conditions hold:

1. **Length Conditions for the Exploration Phase**

$$T_k \geq c_0 \frac{1}{\mu_{\text{min}, k}} \left\{ \frac{1}{(1 - \gamma)^5 \epsilon^2} + \frac{t_{\text{mix}, k}(\frac{1}{4})}{1 - \gamma} \right\} \cdot \log\left( \frac{NL|S|AT_k}{\delta} \right) \log \left( \frac{1}{(1 - \gamma)^2 \epsilon} \right)$$

Here, $T_k$ is the length of the $k$ exploration phase, $\mu_{\text{min}, k}$ is the minimum stationary distribution probability of the Markov chain guided by the joint strategy $\pi_k$, $t_{\text{mix}, k}(1/4)$ is the mixing time, $\gamma$ is the discount factor, and $\epsilon$ is the tolerance of the algorithm.

1. The Exploration Phase Quantity Condition$K$ must meet the following relationships:

$$K \geq \frac{(1 - \delta)^2 p_{\min} - \delta^2}{L \left( \delta + (1 - \delta) p_{\min} \right)^2} \delta$$

where $p_{\min}$ is the minimum probability of all joint strategies $\pi \in \Pi$ to the equilibrium strategy, and $L$ is the length of the shortest strictly optimal response path.1. Step Size Condition: For all time steps $t$, step size $\eta^i_t$ must be met:

$$\eta^i_t = \frac{c_1}{\log\left( \frac{NL|S||A^i|T_k}{\delta} \right)} \min \left\{ \frac{(1 - \gamma)^4 \epsilon^2}{\gamma^2}, \frac{1}{t_{\text{mix}, k}(\frac{1}{4})} \right\}$$

1. **Experimental Probability Condition** Experimental Probability $\rho_i$ needs to be set to:

$$\rho_i = 1 - \left(1 - \frac{\zeta / 8 - \epsilon}{\Gamma} (1 - \gamma) \right)^{\frac{1}{N - 1}} := \rho$$

1. Tolerance Condition: The tolerance $\zeta_i$ for each agent is set to:

$\zeta_i = \frac{\zeta}{2}$。

Under these conditions, Theorem 1 provides the finite-sample convergence results of Algorithm 1, which ensures that the probability of the algorithm converging to a certain equilibrium strategy with finite examples is at least $1-\delta$.

The significance of Theorem 1 is that it shows that the decentralized Q learning algorithm can converge to an approximate equilibrium state with a high probability under the condition of finite samples. This is of great value for learning tasks in a decentralized environment where other agent strategies and rewards cannot be observed, making the algorithm more feasible and efficient in practical applications.

### Proposition 2: Parameter dependence of sample complexity

Proposition 2 further analyzes the sample complexity \(N(\epsilon, \delta)\ in Theorem 1 and derives its dependencies on some key parameters. These parameters include Discount Factor (\gamma\), Minimum Steady-State Distribution Probability \(\mu_{\text{min}}\), and Mixing Time \(t_{\text{mix}}\).

#### Content of Proposition 2

Proposition 2 states that the sample complexity of the algorithm $N(\epsilon, \delta)$ is closely related to the following three parameters:

1. Discount Factor$\gamma$: Controls the weight of future rewards in Q calculations. When $\gamma$ is large, the agent pays more attention to the future return, which makes the Q value update more slower and the sample complexity increases.
2. Minimum Steady-State Distribution Probability$\mu_{\text{min}}$: The minimum probability of a steady-state distribution in Hypothesis 1 represents the minimum probability that the system will visit each state in a long-term steady state. When $\mu_{\text{min}}$ is small, some states may be rarely accessed, which increases the sample complexity of Q learning.
3. Mixing Time$t_{\text{mix}}$: Represents the time it takes for a Markov chain to reach a steady-state distribution from an arbitrary initial state. The longer the mixing time, the longer the exploration time required for the system to reach a stable distribution, increasing sample complexity.

Proposition 2

For all $k \in [K]$ and $i \in [N]$, the following inequalities hold:

1. **Upper bound of the probability of minimum stationary distribution**

$\mu^i_{\text{min}, k} \leq \left[ 1 - (|S| - 1) \kappa \left( \prod_{i \in [N]} \frac{\rho_i}{|A_i|} \right)^H \right] \cdot \frac{\rho_i}{|A_i|} $。

Here, $\mu^i_{\text{min}, k}$ denotes the minimum stationary distribution probability of agent $i$ in the exploration phase $k$, and $\rho_i$ is the experimental probability of agent $i$, $|A_i|$ is the action space size of the agent $i$, $|S|$ is the statespace size, and $\kappa$ and $H$ are constants in hypothesis 1.

1. **Lower bound of the probability of minimum stationary distribution**

$$\mu^i_{\text{min}, k} \geq \kappa \frac{\rho_i}{|A_i|} \left( \prod_{i \in [N]} \frac{\rho_i}{|A_i|} \right)^H$$

This inequality gives the lower bound of the probability of the minimum stationary distribution, which means that in the exploratory phase $k$, the stationary distribution of the state-action pair of the Markov chain is at least the value in the preceding equation.

1. **Upper bound of mixing time**

$$t^i_{\text{mix}, k}(\alpha) \leq (H + 1) \left( \frac{-\log \alpha}{\log \left[ 1 - |S| \kappa \left( \prod_{i \in [N]} \frac{\rho_i}{|A_i|} \right)^H \cdot \min_{i \in [N]} \rho_i \right]} + 1 \right)$$

where $t^i_{\text{mix}, k}(\alpha)$ denotes the mixing time it takes for agent $i$ to reach the total variation $\alpha$ in the exploration phase $k$. The upper bound indicates that the mixing time increases as $\alpha$ decreases, but its value is not excessive because the Markov chain converges exponentially.#### Explanation and meaning of proposition 2

- Parameter Dependence: Proposition 2 indicates how sample complexity is affected by the discount factor, the minimum steady-state distribution probability, and the mixing time. In particular:
    - $\gamma$ The closer ** to 1 ** (i.e., the agent values future returns more seriously), the sample complexity increases significantly because Q updates require more iterations to reflect the long-term cumulative returns.
    - At mu_a very small size, the probability of some states being accessed is very low, resulting in the estimation of some state-action pairs in the Q table requiring more samples to be accurately reflected.
    - A long mixing time$t_{\text{mix}}$ indicates that it takes a long time for the system to reach steady state from an arbitrary initial state, which means that a long exploration phase is required to ensure that the system is close to steady state.

The derivation results of proposition 2 provide guidance for the parameter selection of the algorithm in practical applications, and the balance between sample complexity and learning accuracy can be found by adjusting these parameters.

### Corollary 1: Convergence improvement in special cases

Corollary 1 builds on theorem 1 and proposition 2 and further discusses convergence improvements in a particular case. The corollary suggests that faster convergence and reduced sample complexity can be achieved if the parameters are adjusted under certain conditions.

#### The contents of Inference 1

Assuming that all the conditions in Theorem 1 are satisfied, and that the minimum steady-state distribution probability $\mu_{\text{min}}$ and the mixing time $t_{\text{mix}}$ satisfy some optimization conditions, the sample complexity $N(\epsilon, \delta)$ can be reduced by an order of magnitude.

Formally, it can be expressed as:

$$
[
N(\epsilon, \delta) = O\left(\frac{1}{\sqrt{\mu_{\text{min}}}} \cdot \frac{\sqrt{t_{\text{mix}}}}{1 - \gamma} \cdot \log\left(\frac{1}{\delta}\right) \cdot \frac{1}{\epsilon}\ right)
]$$

#### Explanation and Meaning of Corollary 1

- **Sample complexity improvements**: Corollary 1 shows that under certain special conditions, the sample complexity can be reduced by an order of magnitude from the original complexity. This means that under certain optimization parameters, the algorithm can reach the specified approximate equilibrium more quickly.
- Practical Implications: Corollary 1 provides further direction for parameter tuning of the algorithm. By satisfying certain conditions, the number of samples required can be effectively reduced and the learning efficiency of the algorithm can be improved.

The results of Corollary 1 provide a more optimized sample complexity reference for practical applications. When certain conditions are met, users can choose an appropriate combination of parameters to reduce learning costs and improve convergence speed.

### Summary

- Theorem 1 provides a non-asymptotic convergence guarantee for a decentralized Q learning algorithm to (\epsilon\)-approximate equilibrium under finite sample conditions, and gives the required sample complexity.
- Proposition 2 analyzes the relationship between sample complexity and key parameters (discount factor, minimum steady-state distribution probability, mixing time), and provides theoretical guidance for parameter selection.
- Corollary 1 further points out that the sample complexity improvement under specific conditions makes the algorithm more efficient and adaptable in practical applications.

These theoretical results provide a comprehensive analysis and guidance for the convergence and sample complexity of the decentralized Q learning algorithm in multi-agent weak cycle random games, so that the parameter selection of the algorithm in practice is more targeted and optimized.

## Supplements:

Weakly Acyclic Stochastic Game is a special type of multi-agent stochastic game, which has some unique structural features, which makes it easier for multi-agents to achieve a stable equilibrium state through the adjustment of optimal strategies in this game environment. The design and analysis of weak-loop stochastic games are often used to ensure that multi-agent systems can converge to some equilibrium strategy.

#### Definition and characteristics of a weakly cyclic random game

In a weak-cycle random game, the main features of the game are:

1. **Existential path to equilibrium**
For each initial policy combination, there is a path to equilibrium through a series of policy updates. This path is limited and reachable, even though it may require multi-step policy adjustments. To put it simply, a weak cyclic game allows for a loop of strategy adjustment, but starting from any combination of strategies, the path to equilibrium can eventually be found through the best reply.
2. **Optimal Response Path**In the weak cyclic game, each agent can adjust its strategy according to a certain "optimal recovery" mechanism, so that in the process of strategy adjustment, the strategy adjustment between different agents will not form an inevitable permanent cycle. That is, even though a short-lived loop may be formed when the strategy is adjusted locally, an equilibrium can eventually be reached through a "strict optimal recovery path".
3. **Weak Acyclicity**
A weak cyclic game does not require all strategy adjustment paths to avoid loops, but it allows some strategy paths to form loops, as long as these loops do not cause the system to fall into an oscillating state that cannot reach equilibrium. That is, even if there are loops in the policy path, there is a way to ensure that the policy combinations of all agents eventually converge to an equilibrium point.

#### Formal definition of a weak-loop random game

A multi-agent random game with a finite set of states SSS and an action set is called a weakly cyclic random game if the game satisfies the following conditions:

- Existence of Equilibrium Strategies: There are one or more combinations of equilibrium strategies (e.g., Markov Perfect Equilibrium).
- Strict optimal recovery path: For any non-equilibrium strategy combination, there is at least one optimal recovery path, which allows the agent to gradually adjust the strategy and eventually reach a certain equilibrium point.
- Path finiteness: The length of each optimal recovery path is finite, i.e., starting from any non-equilibrium strategy combination, equilibrium can be achieved after a finite number of policy adjustments.

#### Example: Policy Adjustment Path and Weak Circularity

In a weakly cyclic game, suppose there are five strategy combinations $\pi_1, \pi_2, \pi_3, \pi_4, \pi_5$, where the strategy combination $\pi_5$ is an equilibrium point. Although there may be short-lived loops of strategy paths (e.g., $\pi_1 \rightarrow \pi_2 \rightarrow \pi_3 \rightarrow \pi_1$), after appropriate adjustments on some strategy combinations, the agent can finally choose a strictly optimal path to reach the equilibrium point $\pi_5$.

#### The significance of a weak cycle game

The design of the weak-cycle stochastic game aims to ensure that the system's strategy combination can converge to a certain equilibrium state, even if there is a limited strategy adjustment loop between agents. Compared with the general random game, this structural characteristic of the weak cyclic game provides a theoretical guarantee for the convergence and avoids the system from falling into infinite oscillation in the process of dynamic adjustment. This property is particularly important for the design of multi-agent learning algorithms, such as decentralized Q-learning, because it allows individual agents to gradually find a stable equilibrium strategy combination in a dynamic environment.

#### Application scenarios

Weak-loop random games are often used in scenarios that require multi-agent cooperation and there is no global control, such as:

- **Traffic Signal Control**: Different traffic lights optimize the traffic flow by adjusting the signal strategy, and finally tend to a stable traffic flow control strategy.
- Distributed Energy Management: In a smart grid, each energy resource adjusts its strategy without global coordination to achieve regional or network-wide energy balance.
- Multi-bot systems: Multiple bots perform tasks in the same environment, each adjusting their strategy to collaborate without conflict.