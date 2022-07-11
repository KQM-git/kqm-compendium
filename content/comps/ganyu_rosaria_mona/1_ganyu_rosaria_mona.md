---
title: Ganyu Rosari Mona Freeze
authors:
  - CC
healing: 2
shielding: 1
difficulty: 2
tags:
  - Ganyu
  - Rosaria
  - Venti
  - Mona
  - Quickswap
  - Multi-Target
  - Sustained
  - Freeze
  - F2P Gear
pros:
  - Very good damage against 2 or more enemies that are freezable and can be crowd controlled by Venti's Burst
  - Majority of the time is spent in iframes and with enemies frozen making it very comfy
  - Made up of units that are highly specialized for freeze and aren't highly contested for as a result

cons:
  - Has noticeably lower DPS ceiling compared to other Ganyu Freeze variations fully composed of limited and standard 5-star characters  
  - Swaps need to be done as fast as possible
  - Healing may not be enough for some people
  - Performs worse in certain situations such as against non-freezable enemies, bosses, and pure single target scenarios
sheet_url: https://docs.google.com/spreadsheets/d/1KSmr86Sc2l73fFqYxR5l_7l847elqnzj-Tffwz0i70E/edit#gid=1035782785
gcsim_url: https://gcsim.app/viewer/share/perm_S7-QHkTWd6XZr8-4Sx8pd
rotation:
  duration: 16.5s
  video_url: https://www.youtube.com/watch?v=MEbFQxlLbJI
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
    atk: 2269
    def: 750
    em: 40
    cr: 31.48
    cd: 216.8
    er: 111.02
    dps: 20528
  - name: Rosaria
    star: 4
    constellation: 6
    weapon:
      name: Favonius Lance
      refinement: 3
    artifacts:
      - Noblesse Oblige
    hp: 18795
    atk: 2618
    def: 837
    em: 40
    cr: 53.98
    cd: 129.44
    er: 153.00
    dps: 8753
  - name: Mona
    star: 5
    constellation: 0
    weapon:
      name: Prototype Amber
      refinement: 5
    artifacts:
      - Tenacity of the Millelith
    hp: 23164
    atk: 1300
    def: 776
    em: 40
    cr: 69.20
    cd: 129.44
    er: 194.82
    dps: 1599
  - name: Venti
    star: 5
    constellation: 0
    weapon:
      name: Favonius Warbow
      refinement: 3
    artifacts:
      - Viridescent Venerer
    hp: 16899
    atk: 1489
    def: 793
    em: 680
    cr: 11.62
    cd: 76.48
    er: 226.36
    dps: 8375
---
 
# **Notes**

This calc follows the current KQMC Standards, simulated with 2 targets but only accounting for the damage on the primary target, done over the course of 5 rotations, uses a mix of craftable and non-limited gacha weapons, 20*4/15 Ganyu Icicles, 15 Venti Burst Absorption Procs, and 18 Swirls. 20 Icicle assumption was derived by weighing the average icicles for split enemies and sucked by Venti's Burst/Frozen (14.74 Icicles = 2 Split Targets, 24.74 = 2 Venti'd Targets) and each multiplied by the duration of the mentioned conditions based on the Rotation Timeline ((7/15) * 14.74 + (8/15) * 24.74 = 20.07 ≈ 20 Icicles.) Icicle count became 15 Icicles for the 5th rotation as the omitted 5 Icicles overlap with the 6th rotation. Gcsim numbers don't penalize periods where there's no grouping nor freeze as it's not implemented at the time of writing whereas this sheet does, but allows for Favonius refinements and proc rate variance to affect the DPS, and are some of the factors that have to be kept in mind. ER requirements were determined through Gcsim, while the remaining fluid substats were optimized with the Solver.

This team has a very good primary target damage for situations where there are 2 or more enemies that are freezable, can be crowd controlled by Venti's Burst, and one of the enemies has a weak spot if using Prototype Crescent. But considering this isn't always the case, this comp ends up performing worse or even not worth considering in certain situations such as against non-freezable enemies, bosses, and pure single target scenarios. The majority of the time is spent in i-frames and with enemies frozen making it quite comfy to play. It technically has some form of healing with the Prototype Amber, but its healing capability may not be enough for some. This variation of Ganyu Freeze has extremely low rotation length which causes ER requirements to shoot high up, making 2 Favonius weapons somewhat mandatory. Refinement 5 for the Favonius weapons is the most ideal for a guaranteed proc chance on both Rosaria and Venti Es and better rotation consistency. Swaps need to be done as fast as possible to keep the rotation times low.
 
# **Rotation Notes**
 
(Ganyu CA - Only for the first Rotation if you're using Prototype Crescent)
Mona E
Rosaria EQ
Ganyu EQ
Venti EQ
Mona Q
Rosaria E
Ganyu CA
Venti E
 
**Disclaimer:** Real-world rotation times and execution will vary from player to player and from situation to situation, which will affect the damage per second in practice. 