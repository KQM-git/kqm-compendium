---
title: Ganyu Shenhe Venti Kokomi Freeze
authors:
  - CC
healing: 3
shielding: 1
difficulty: 3
tags:
  - Ganyu
  - Shenhe
  - Venti
  - Kokomi
  - Quickswap
  - Multi-Target
  - Sustained
  - Freeze
  - F2P Gears
pros:
  - Very good damage against 2 or more enemies that are freezable and can be crowd controlled by Venti's Burst
  - ~95-100% Freeze and Healing Uptime wherein both can contribute to better damage and gameplay in practice
  - Made up of units that are highly specialized for freeze and aren't highly contested for as a result
  - Gears are very accessible for F2Ps
cons:
  - Performs worse in certain situations such as against non-freezable enemies, bosses, and pure single target scenarios
  - Has a high accessibility wall being completely made up of limited 5-star characters
  - Rotation has more swaps compared to the Mona Variation which can be hard to learn and getting used to
  - Swaps need to be done as fast as possible to keep the rotation times low
  - Kokomi's ER requirements are relatively high even with 2 Favonius users in the team

sheet_url: https://docs.google.com/spreadsheets/d/1H-gadOC_35Y_PvdxRHkxhR6YzWCTFc6HgcfqHRQKXM8/edit#gid=1035782785
gcsim_url: https://gcsim.app/viewer/share/perm_WWoSUZli8k7FzzLXRe6aE
rotation:
  duration: 20.5s
  video_url: https://www.youtube.com/watch?v=ry_u84WQESc
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
    cr: 44.72%
    cd: 216.8%
    er: 111.02%
    dps: 32381
  - name: Shenhe
    star: 5
    constellation: 0
    weapon:
      name: Favonius Lance
      refinement: 3
    artifacts:
      - Noblesse Oblige
    hp: 19599
    atk: 2299
    def: 973
    em: 40
    cr: 46.03%
    cd: 122.82%
    er: 152.64%
    dps: 4970
  - name: Venti
    star: 5
    constellation: 0
    weapon:
      name: Favonius Warbow
      refinement: 3
    artifacts:
      - Viridescent Venerer
    hp: 16899
    atk: 1133
    def: 793
    em: 766
    cr: 41.41%
    cd: 109.58%
    er: 204.32%
    dps: 7148
  - name: Sangonomiya Kokomi
    star: 5
    constellation: 0
    weapon:
      name: Thrilling Tales of Dragon Slayers
      refinement: 5
    artifacts:
      - Tenacity of the Millelith
    hp: 33894
    atk: 1392
    def: 780
    em: 40
    cr: 11.62%
    cd: 63.24%
    er: 206.90%
    dps: 2064
---
 
# **Notes**

This calc follows the current KQMC Standards, simulated with 2 targets but only accounting for the damage on the primary target, done over the course of 5 rotations, uses a mix of craftable and non-limited gacha weapons, 25/27*3/21 Ganyu Icicles, and 15 Venti Burst Absorption Procs. 25 Icicle assumption was derived by weighing the average icicles for split enemies and sucked by Venti's Burst/Frozen (16.73 Icicles = 2 Split Targets, 26.73 = 2 Venti'd Targets) and each multiplied by the duration of the mentioned conditions based on the Rotation Timeline ((3/15) * 16.73 + (12/15) * 26.73 = 24.73 ≈ 25 Icicles.) Icicle count became 27 for the 2nd-4th rotations as it is been assumed that enemies stayed close from the first rotation with the virtually negligible freeze downtime (determined through the sims). It then dropped to 21 Icicles for the 5th rotation as the omitted 6 Icicles overlap with the 6th rotation. Gcsim numbers don't penalize periods where there's no grouping nor freeze as it's not implemented at the time of writing, but allows for Favonius refinements and proc rate variance to affect the DPS, and are some of the factors that have to be kept in mind. ER requirements were determined through Gcsim, while the remaining fluid substats were optimized with the Solver.

This team has a very good primary target damage for situations where there are 2 or more enemies that are freezable, can be crowd controlled by Venti's Burst, and one of the enemies has a weak spot if using Prototype Crescent. But considering this isn't always the case, this comp ends up performing worse or even not worth considering in certain situations such as against non-freezable enemies, bosses, and pure single target scenarios. Compared to the Mona variation instead of Kokomi, this comp on paper sacrifices some DPS ceiling for a massive improvement in the healing department and freeze uptime that can result in better grouping and damage in practice. While that may seem that it would result in easier gameplay, the rotation has more swaps which can be hard to learn and getting used to, and the effective rotation length will scale marginally worse the higher your ping. It is also completely made up of limited 5-star characters and can be an expensive team to build. Kokomi's ER requirements are quite high even with 2 Favonius users in the team, and will need more resin investment for artifacts on average compared to other low damage profile supports in other teams. 2 Favonius users is mandatory when Kokomi bursting every rotation and ~95-100% freeze uptime is desired, but not bursting with her is at all is also viable, as the same setup but removing Kokomi burst from the sequence will only result in ~5% total team DPS, among other QoL things. Using an R3 The Stringless on Venti will require building higher ER on Shenhe and Venti (~180 and ~187 ER respectively) but this brings the DPS gap to as low as ~1-3%. Swaps need to be done as fast as possible to keep the rotation times low.
 
# **Rotation Notes**
 
Kokomi E  
Ganyu CA  
Shenhe QtE  
Ganyu EQ  
Kokomi Q(N2) - N2 should be skipped if it prolongs your rotation  
Ganyu CA  
Shenhe tE  
Ganyu E CA  
Venti E  
 
**Disclaimer:** Real-world rotation times and execution will vary from player to player and from situation to situation, which will affect the damage per second in practice. 