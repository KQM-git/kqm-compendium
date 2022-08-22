---
title: 3xEM
status: Proposed
date: 04/12/2022
description: Intended to punish 3xEM mainstat artifact sets because they are difficult to farm for and have unrealistic distributions.
reason: In proposal stage.
sheet_url: https://docs.google.com/document/d/1mf-OQuYBAOkSBVGTOU-v-TjMJmSPOfVZKMsIbpwCJRc/edit?usp=sharing
---
## Rationale
<a href="https://guoba.deeznuts.moe/kazuha-er-em"><span style="color: #EDAFB8;">GUOBA analysis</span></a> shows that 3xEM mainstat allocations from the KQMS represents the top 5% of submissions (which already have a high selection bias). Furthmore, it has been known that Elemental Mastery as a mainstat is significantly more rare than other stats. Therefore, the KQMS should penalize substat caps more harshly for rarer stat allocations.

### Most Impacted
![](/kqms/proposals/em_impact.jpg)
<!-- ![](https://i.imgur.com/qsIOIvO.png) -->

<!-- Denied #FF6060 -->
<!-- Proposed #FFDB7D -->
<!-- Accepted #64E271 -->
## Status: <span style="color: #FFDB7D;">Proposed</span>
Running Elemental Mastery across the circlet, timepiece, and goblet artifact slots is optimal for many units, but the KQMS does not currently adjust its substat allocation caps to adjust for their rarity. This leads to an inflation of Energy Recharge or CRIT Rate allocation that is not available to many players. For both <a href="https://guoba.deeznuts.moe/venti-14-ticks"><span style="color: #EDAFB8;">Venti</span></a> and <a href="https://guoba.deeznuts.moe/kazuha-er-em"><span style="color: #EDAFB8;">Kazuha</span></a>, GUOBA shows that the KQMS is between 1 to 3 months of farming for set pieces. Between Elemental Mastery being rarer and many of these units using 4-piece sets, it is unrealistic for the KQMS to not penalize this.
<br></br>
###
On the otherhand, there are questions such as:
- Does adjusting the KQMS to penalize these allocations impact team damage by a significant margin?
- Is this is a result of players not farming enough for Viridescent Venerer?
- Should theorycrafters be optimizing for 2xEM 1xER?

## Jas Proposal
Currently, the KQM Standard uses a substat distribution according to the following:
- 20 fixed substats should be distributed as 2 rolls of every substat.
- 20 distributed substats should be distributed as optimally as can reasonably be achieved with the tools being used within the constraints given.
- Each substat type can have maximum 2 distributed substat rolls per artifact with a main stat that is of a different stat from it.
<br></br>
As any calculation standard does, this comes with several potential drawbacks for simulating realistic or reasonable results. One of those drawbacks is that the current KQM Standard can under- or over-estimate the performance of certain builds, because certain mainstats have different drop-rates in-game. For example, EM mainstats on goblets and circlets are much less common than all other mainstats. This means that, for any particular number of desired substats **N**, obtaining an EM mainstat item with **N** desired substats is less likely than obtaining a different mainstat item with **N** desired substats. The KQM Standard currently overestimates the performance of builds with uncommon mainstats, like EM/EM/EM, and underestimates the performance of builds with more common mainstats, like ER/ATK%/CRIT. I propose a solution to that issue in this document.
<br></br>

###
<a href="https://docs.google.com/document/d/1eTIMPyx81z2W6MBZmb74QUFlE-40U9M3-qplF7tzvSI/edit?usp=sharing"><span style="color: #EDAFB8;">Jas Proposal</span></a>

<a href="https://docs.google.com/spreadsheets/d/1mWwtZR1HR5FGznH7elGo_hOlCUFlEJPpN8Z4Y4JwBgg/edit?usp=sharing"><span style="color: #EDAFB8;">Jas Allocation by Ayzel</span></a>


## Jamberry Proposal
Basis of this proposal is that Jas' idea has some value, but is a bit complicated for new TCers and also has far too much spread from more rare to more common artifacts.<br></br>
Values for my proposal were chosen from general observation in qph and other servers' help channels that generally, at late game people's common mainstat artis will be better than their rare ones, but not dramatically. In general, though some artis may be more common, there is only so good an arti can get, and % gain in quality per resin (and therefore, per # of that artifact farmed and rolled) decreases the better players' artis get.<br></br>
For example, ATK goblets are a bit over 4x (simplified to exactly 4x bc I'm lazy) as common as Anemo goblets.<br></br>
At AR50, you might have gotten 5 Anemo goblets and 20 ATK goblets ever. If you need to gear for example both your Jean and your (4verm for argument's sake, since mixed sets Xiao could prefer ATK) Xiao, and choose Anemo goblets, your Jean will be using a top 40% (2nd best out of 5) Anemo goblet. If you were to choose ATK goblets, your Jean could be using a top 10% ATK goblet.<br></br>
At AR55, that could be 20 Anemo goblets and 80 ATK, for a top 10% Anemo goblet and a top 3% ATK goblet.
At AR59, staring into the void ahead and questioning the choices that brought you here, that could be 100 Anemo goblets and 400 ATK, for a top 2% Anemo goblet and a top .5% ATK goblet.<br></br>
Realistically speaking, a top 2% Anemo goblet is much much closer to a top .5% ATK goblet than a top 40% to a top 10%. Thus, direct correlation between rarity of mainstat and useful sub count does not make sense as a means of modeling artifact quality. The best solution should come from some compromise between practical data and the need for standards to be easily implementable.

###
<a href="https://docs.google.com/document/d/1mf-OQuYBAOkSBVGTOU-v-TjMJmSPOfVZKMsIbpwCJRc/edit?usp=sharing"><span style="color: #EDAFB8;">Jamberry Proposal</span></a>


<!-- ###
![](https://i.imgur.com/zTLB2sJ.png) -->

