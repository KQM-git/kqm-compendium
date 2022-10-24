---
title: Ganyu Shenhe Venti Mona Freeze
tab_title: CC - Mona - AoE
authors:
  - CC
healing: 2
shielding: 1
difficulty: 2
target: 4
tags:
  - Unverified
  - Ganyu
  - Shenhe
  - Venti
  - Mona
  - Quickswap
  - Multi-Target
  - Sustained
  - Freeze
  - F2P Gears
pros:
  - Very good damage against 2 or more enemies that are freezable and can be crowd controlled by Venti's Burst
  - Majority of the time is spent in i-frames and with enemies Frozen making it very comfy
  - Made up of units that are highly specialized for Freeze and aren't highly contested for as a result
  - ER Requirements are easily achievable making building relatively easier
cons:
  - Has a high accessibility wall being completely made up of limited and standard 5-Stars characters   
  - Swaps need to be done as fast as possible and learning Ganyu M1-R Cancel (for PC users) is highly encouraged to keep the rotation times low
  - Requires aiming which may prove to be a challenge especially for mobile and controller users
  - Healing may not be enough for some people
  - Performs worse in certain situations such as against non-freezable enemies, bosses, and pure single-target scenarios
sheet_url: https://docs.google.com/spreadsheets/d/1r8_w0ZKApBwc-VrNzdP1811syBvoNbgIPCNHMyzlwY4/edit#gid=1035782785
gcsim_url: https://gcsim.app/viewer/share/perm_61RPWhfUVHs7BHLDn21MO
rotation:
  duration: 21s
  video_url: https://youtu.be/59U0leDEaWs
characters:
  - name: Ganyu
    star: 5
    constellation: 0
    weapon:
      name: Prototype Crescent
      refinement: 5
    artifacts:
      - Blizzard Strayer
    hp: 16089
    atk: 2101
    def: 750
    em: 40
    cr: 44.72
    cd: 216.8
    er: 111.02
    dps: 33926
  - name: Shenhe
    star: 5
    constellation: 0
    weapon:
      name: Favonius Lance
      refinement: 3
    artifacts:
      - Noblesse Oblige
    hp: 19599
    atk: 2618
    def: 973
    em: 40
    cr: 46.03
    cd: 122.82
    er: 163.66
    dps: 3776
  - name: Venti
    star: 5
    constellation: 0
    weapon:
      name: The Stringless
      refinement: 3
    artifacts:
      - Viridescent Venerer
    hp: 16899
    atk: 1195
    def: 793
    em: 766
    cr: 41.41
    cd: 109.58
    er: 165.06
    dps: 9246
  - name: Mona
    star: 5
    constellation: 0
    weapon:
      name: Prototype Amber
      refinement: 5
    artifacts:
      - Tenacity of the Millelith
    hp: 23164
    atk: 1538
    def: 776
    em: 40
    cr: 49.50
    cd: 129.00
    er: 194.82
    dps: 1783
---
 
# **Notes**

This calc follows the current KQMC Standards, simulated with 2 targets but only accounting for the damage on the primary target, done over the course of 5 rotations, uses a mix of craftable and non-limited gacha weapons, 23 Ganyu Icicles, 15 Venti Burst Absorption Procs, and 18 Swirls. 23 Icicle assumption was derived by weighing the average Icicles for split enemies and sucked by Venti's Burst/Frozen (14.74 Icicles = 2 Split Targets, 24.74 = 2 Venti'd Targets) and each multiplied by the duration of the mentioned conditions based on the Rotation Timeline ((3/15) * 14.74 + (12/15) * 24.74 = 22.74 ≈ 23 Icicles) which can be found in the sheets. Gcsim numbers don't penalize periods where there's no grouping nor Freeze as it's not implemented at the time of writing whereas this sheet does, but allows for Favonius refinements and proc rate variance to affect the DPS, and are some of the factors that have to be kept in mind. ER Requirements were determined through Gcsim, while the remaining fluid substats were optimized with the Solver.
<br></br>
This team has a very good primary target damage for situations where there are 2 or more enemies that are freezable, can be crowd controlled by Venti's Burst, and one of the enemies has a weak spot if using Prototype Crescent. But considering this isn't always the case, this comp ends up performing worse or even not worth considering in certain situations such as against non-freezable enemies, bosses, and pure single-target scenarios. The majority of the time is spent in i-frames and with enemies Frozen making it quite comfy to play but may not necessarily be the case for all people as this comp requires aiming, which may prove to be a challenge for some, especially mobile or controller users. It technically has some form of healing with the Prototype Amber, but its healing capability may not be enough for some. This comp is completely made up of limited and standard 5-Stars characters which means it has a high accessibility wall but is also being made up of units that are highly specialized for Freeze and aren't highly contested for. While The Stringless on Venti is easily replaceable, the Favonius Lance on Shenhe plays a major role in this comp's rotation consistency and lowering everyone's ER Requirements(which also results in easier artifact farming). And so, refinement 3 or higher is recommended for a chance of proc on both Shenhe Es (which has a 10s cooldown and an R3 Favonius Lance has 9s) and better consistency. Swaps need to be done as fast as possible and learning Ganyu M1-R Cancel for PC users is highly encouraged to keep the rotation times low.
<br></br>
# **Rotation Notes**
 
**General Bow Rotation:**
Shenhe tEQ
Ganyu EQ
Venti EQ
Mona QE
Shenhe tE
Venti E
Ganyu E 4CA (3CA is fine if your rotation becomes longer than desired)
<br></br>

**Prototype Crescent Rotation:**
Ganyu CA (aim for the weak spot)
Shenhe tEQ
Ganyu EQ
Venti EQ
Mona QE
Shenhe tE
Venti E
Ganyu E 3CA (2CA is fine if your rotation becomes longer than desired)
<br></br>
**Disclaimer:** Real-world rotation times and execution will vary from player to player and from situation to situation, which will affect the damage per second in practice. 
 