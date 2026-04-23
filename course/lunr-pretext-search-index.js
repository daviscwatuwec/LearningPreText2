var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "",
  "title": "Introducing measure theory",
  "body": " Introducing measure theory   Defining outer measure  Recall the definition of the upper and lower Riemann sums: Let be a (bounded) function and be a partition. Let and be the supremum and infemum of over the th member of the partition, and be its length. write the definitions of  The upper and lower sums: and   and the upper and lower integrals and  and  and where runs over all partitions.  The basic idea is that since we can \"measure\" the length of intervals, we can use them to build rectangles to get the area. We have seen that this can fail to resolve the computation of some integrals. Recall that upper integral and lower integral of the indicator function of disagree: while , so the philosophy of upper and lower sums only tells you that the area under the curve is somewhere between 0 and 1.   The indicator function for is . and    If we could \"measure\" more sets than just intervals, then we might be able to get better information about integration. (We won't do this. If you want to learn more - look into Lebesgue integration.   Idea If is contained in a union of open intervals: then the \"measure\" of should be at most the sum of the lengths, .   Total length and outer measure   Let be a countable collection of open intervals (remember countable means either finite or countably infinite) the total length of is   For any set , say what a countable open cover of by intervals is and define the outer measure of .     details The total length is the sum of the lengths of the intervals in : . A countable open cover of by intervals is a countable collection of open interval whose union contains as a subset. and the outer measure is where runs over all countable open covers of by open intervals.   Facts about outer measure   (points have no measure) For any ,  (monotonicity) If then  (countable subadditivity) For any countable collection of sets ,        For any , is an open cover (containing only one element) with total length , so . Take to complete the proof.  For any countable open cover of by intervals, also covers , so . This means that is a lower bound an the set of all total lengths of countable open covers of . Thus, .  Let . For each , find a countable open cover which does a good job approximating . More precisely, since there is a countable open cover of with . (We pick powers of 2 since ). A countable union of countable sets is still countable, so is a countable collection of open intervals. For any , is in some and so is an element of some . Thus, is a countable open cover, and so . Take to complete the proof.   Here is a neat corollary   Any countable set has outer measure zero. In particular, even though is dense!       Any countable set is a countable union of singleton sets: so countable subadditivity and the fact that singletons have measure zero completes the proof.      outer measure of an interval   measure agrees with length For any (closed) interval , .   Proof of  Consider any and prove that by finding a very simple open cover. Take to make a conclusion.   We will use an open cover of continaing only one element: . Since the outer measure is an infimum, this means that      Proof of  In order to show that we need to show that *every* open cover has total length at least . Let be any countable open cover of by open intervals. Use compactness to make a conclusion.   Since is closed and bounded it is compact. Since is an open cover, it has a finite subcover, . Notice that throwing out a bunch of elements reduces the total length, so \\(\\ell(\\J)\\le \\ell(\\I)\\).   Next we rely on the following fact (which has a straightforward inductive proof based on the number of elements of ). If is a finite collection of open intervals, then there is another countable colection of disjoint open intervals with and . Use this to conclude that and finish the proof.   We now have . Since the elements of are all disjoint, must be a subset of a single element of . Thus, the fact we appealed to says that . Since , . Thus we have shown that is a lower bound on the total length of any countable cover, so      "
},
{
  "id": "DefnOuterMeasure-s-xref",
  "level": "2",
  "url": "sec-.html#DefnOuterMeasure-s-xref",
  "type": "Definition",
  "number": "1",
  "title": "Total length and outer measure.",
  "body": " Total length and outer measure   Let be a countable collection of open intervals (remember countable means either finite or countably infinite) the total length of is   For any set , say what a countable open cover of by intervals is and define the outer measure of .    "
},
{
  "id": "FactsAbtMeasure-xref",
  "level": "2",
  "url": "sec-.html#FactsAbtMeasure-xref",
  "type": "Theorem",
  "number": "2",
  "title": "Facts about outer measure.",
  "body": " Facts about outer measure   (points have no measure) For any ,  (monotonicity) If then  (countable subadditivity) For any countable collection of sets ,   "
},
{
  "id": "sec--2-13",
  "level": "2",
  "url": "sec-.html#sec--2-13",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "    For any , is an open cover (containing only one element) with total length , so . Take to complete the proof.  For any countable open cover of by intervals, also covers , so . This means that is a lower bound an the set of all total lengths of countable open covers of . Thus, .  Let . For each , find a countable open cover which does a good job approximating . More precisely, since there is a countable open cover of with . (We pick powers of 2 since ). A countable union of countable sets is still countable, so is a countable collection of open intervals. For any , is in some and so is an element of some . Thus, is a countable open cover, and so . Take to complete the proof.   "
},
{
  "id": "cor-QCountable",
  "level": "2",
  "url": "sec-.html#cor-QCountable",
  "type": "Corollary",
  "number": "3",
  "title": "",
  "body": "  Any countable set has outer measure zero. In particular, even though is dense!   "
},
{
  "id": "sec--2-15",
  "level": "2",
  "url": "sec-.html#sec--2-15",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "   Any countable set is a countable union of singleton sets: so countable subadditivity and the fact that singletons have measure zero completes the proof.   "
},
{
  "id": "MeasureVsLength",
  "level": "2",
  "url": "sec-.html#MeasureVsLength",
  "type": "Theorem",
  "number": "4",
  "title": "measure agrees with length.",
  "body": " measure agrees with length For any (closed) interval , . "
},
{
  "id": "sec--3-3",
  "level": "2",
  "url": "sec-.html#sec--3-3",
  "type": "Proof",
  "number": "1",
  "title": "Proof of <span class=\"process-math\">\\(\\le\\)<\/span>.",
  "body": " Proof of  Consider any and prove that by finding a very simple open cover. Take to make a conclusion.   We will use an open cover of continaing only one element: . Since the outer measure is an infimum, this means that    "
},
{
  "id": "sec--3-4",
  "level": "2",
  "url": "sec-.html#sec--3-4",
  "type": "Proof",
  "number": "2",
  "title": "Proof of <span class=\"process-math\">\\(\\ge\\)<\/span>.",
  "body": " Proof of  In order to show that we need to show that *every* open cover has total length at least . Let be any countable open cover of by open intervals. Use compactness to make a conclusion.   Since is closed and bounded it is compact. Since is an open cover, it has a finite subcover, . Notice that throwing out a bunch of elements reduces the total length, so \\(\\ell(\\J)\\le \\ell(\\I)\\).   Next we rely on the following fact (which has a straightforward inductive proof based on the number of elements of ). If is a finite collection of open intervals, then there is another countable colection of disjoint open intervals with and . Use this to conclude that and finish the proof.   We now have . Since the elements of are all disjoint, must be a subset of a single element of . Thus, the fact we appealed to says that . Since , . Thus we have shown that is a lower bound on the total length of any countable cover, so    "
},
{
  "id": "course-notes-4",
  "level": "1",
  "url": "course-notes-4.html",
  "type": "Handout",
  "number": "",
  "title": "Measure theory homework (optional)",
  "body": " Measure theory homework (optional)    In we were pretty lazy with the amount of detail we gave. Pick one or two of these and compose a full proof.  Each of and has measure zero. Pick one of them and prove it.  You might be tempted to imitate the proof for , but that proof really used compactness. Instead try to use other results we have already proven.    Use induction (on the number of elements of ) to prove the following. Let be a finite collection of open intervals. Then there exists another finite collection of open interval with    and contain the same elements:  At most as much length as : .   The base case should be easy. In your inductive step work in cases: Either the intervals are already all disjoint and you are done, or there are two that overlap. Can you make this explicit )   An uncountable measure zero set The famous \"Cantor set\" or \"Cantor dust\" has a few equivalent definitions:    The set of all real numbers which have base 3 expansions containing only 0 and 2 (so is in the Cantor set, but is not. Note that is in the Cantor set)    (A recursive definition) For a set and define . Define a sequence of sets by . Cantor's set is given by     It is not too hard to use the first definition to show that is in bijection with , but that's not your goal right now. I want you to study these definitions and compose an argument that > has measure zero.    "
},
{
  "id": "course-notes-5",
  "level": "1",
  "url": "course-notes-5.html",
  "type": "Section",
  "number": "",
  "title": "Starting the Riemann-Lebesgue theorem on integrability",
  "body": " Starting the Riemann-Lebesgue theorem on integrability    Here are two things you will remember from the unit on the Riemann integral:   Every continuous function is integrable         The indicator function for the rationals is not integrable. It is also discontinuous at every point in .      This suggests the following. Perhaps a function is integrable if and only if it is \"not too\" discontinuous .   The Riemann Lebesgue theorem   A function is integrable over if and only if     Here means  is the set of all inputs where is discontinuous.   Not a proof, but an idea:  Recall a condition involving partitions that is equivalent to a function being integrable.    is integrable if and only if for every there is a partition with    If we want to show that then what do we need to show?    if and only if for every there is an countable cover of by open intervals with    So give an idea:   Well, a partition is made out of intervals. Maybe we can use a partition which has to build an open cover of the set of discontinuities which has very little length.   In order to make this work, we will need a few more details.     For an interval , the net oscillation of a function over is given by . The oscillation of at a point is given by     ,        Examples: Explain why and   The graph of and          and , so Let and . There are some with and . (Get explicit values if your like.) Thus and . You can make these equality by remembering that the max and min values of are . Thus, . Take the limit as to get       is discontinuous at if and only if      Think about the contrapositive. ( is continuous at iff )  Suppose is continuous and let . There is a so that for all if then . But this means that for all , . But then . This can be used to show that . Divide by 2 to conclude that .  Suppose is continuous and let . Since is defined to be a limit. There is some so that for all , if then . Set But then for any , if then , which by has length less that . But that means that     Inspired by this, for any we will set to be the set of all with .         for some   for some   for some      if and only if for every there is a countable cover of by open interval with total length less than .  So, instead of proving that we will show that for all   Integrability implies has measure zero.  Half of the proof of the Riemann Lebesgue theorem  Suppose that is integrable over and . For any there is a partition so that (Get the oscilation to appear.)       Now fix any and restrict this sum to the set of all with . Dropping some terms makes the sum smaller so that,       Divide both sides by        Fact (almost) If , and then . Say something about a cover. (Homework: Fix this claim and prove it)   Every is therefore in some with . is a cover of    Make a conclusion  Bu sub-additivity of outer measure . Take the limit as to conclude that . Since , subadditivity concludes .    "
},
{
  "id": "thm-RiemLebLem",
  "level": "2",
  "url": "course-notes-5.html#thm-RiemLebLem",
  "type": "Theorem",
  "number": "5",
  "title": "The Riemann Lebesgue theorem.",
  "body": " The Riemann Lebesgue theorem   A function is integrable over if and only if    "
},
{
  "id": "def-oscillation",
  "level": "2",
  "url": "course-notes-5.html#def-oscillation",
  "type": "Definition",
  "number": "6",
  "title": "",
  "body": "  For an interval , the net oscillation of a function over is given by . The oscillation of at a point is given by     ,     "
},
{
  "id": "course-notes-5-2-17-1-1-3",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-2-17-1-1-3",
  "type": "Table",
  "number": "7",
  "title": "The graph of <span class=\"process-math\">\\(\\sin(x)\\)<\/span> and <span class=\"process-math\">\\(\\sin(1\/x)\\)<\/span>",
  "body": " The graph of and        "
},
{
  "id": "prop-alphaDisc",
  "level": "2",
  "url": "course-notes-5.html#prop-alphaDisc",
  "type": "Proposition",
  "number": "8",
  "title": "",
  "body": "   is discontinuous at if and only if    "
},
{
  "id": "course-notes-5-2-19",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-2-19",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Think about the contrapositive. ( is continuous at iff )  Suppose is continuous and let . There is a so that for all if then . But this means that for all , . But then . This can be used to show that . Divide by 2 to conclude that .  Suppose is continuous and let . Since is defined to be a limit. There is some so that for all , if then . Set But then for any , if then , which by has length less that . But that means that    "
},
{
  "id": "course-notes-5-2-21",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-2-21",
  "type": "Corollary",
  "number": "9",
  "title": "",
  "body": "  "
},
{
  "id": "course-notes-5-2-22",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-2-22",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "    for some   for some   for some    "
},
{
  "id": "course-notes-5-2-26",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-2-26",
  "type": "Proof",
  "number": "3",
  "title": "Half of the proof of the Riemann Lebesgue theorem.",
  "body": "Half of the proof of the Riemann Lebesgue theorem  Suppose that is integrable over and . For any there is a partition so that (Get the oscilation to appear.)       Now fix any and restrict this sum to the set of all with . Dropping some terms makes the sum smaller so that,       Divide both sides by        Fact (almost) If , and then . Say something about a cover. (Homework: Fix this claim and prove it)   Every is therefore in some with . is a cover of    Make a conclusion  Bu sub-additivity of outer measure . Take the limit as to conclude that . Since , subadditivity concludes .  "
},
{
  "id": "course-notes-6",
  "level": "1",
  "url": "course-notes-6.html",
  "type": "Handout",
  "number": "",
  "title": "Riemann Lebesgue part 1 homework (optional)",
  "body": " Riemann Lebesgue part 1 homework (optional)    Pull up a graph of in your favourite graphing utility (Maybe desmos). Tell me what is and write a few sentences justifying your conclusion    Recall the indicator function for , . Prove that for all    We mentioned in the notes that there is a gap. It is not the case that if and then . Prove the following  Claim if and then either is en endpoint of or .   Use the observation above to fix the proof we did in the notes of the following. Claim If is integrable then .  Hint: Instead of using the open cover , try where \"small\" you need to pick and .    "
},
{
  "id": "course-notes-7",
  "level": "1",
  "url": "course-notes-7.html",
  "type": "Section",
  "number": "",
  "title": "Finishing the Riemann-Lebesgue theorem on integrability",
  "body": " Finishing the Riemann-Lebesgue theorem on integrability   Finishing the Riemann-Lebesgue theorem on integrability  Our goal is the proof Recall what it says   A bounded function is integrable if and only if has measure zero.   We have already proven one direction   We've already proven that integrability implies that the set of discontinuities is measure 0.   We still need to prove the reverse:   We need to prove that if the set of discontinuities is measure zero then is integrable   We will need two more propositions in our argument The first says that if you can bound the oscillation at every point, then you control the difference between the upper and lower integrals.   Let , be bounded and satisfy that . Then    The second says that is compact (Recall what \"compact\" means, as well as a theorem from analysis I that says excactly what sets are compact   A set being \"compact\" means that every open cover has a finite subcover. In analysis I you proved that a subset of is compact if and only if it is closed and bounded.    Let be a function and . Then is compact. (Even though might not be)   Proof of is homework.   Example   Use the picture below to explain why has non-closed discontinuity set, but is closed desmos link - See what happens as you zoom in.        I see jump discontinuities at -values that approach 0. But at there is not a discontinuity, so is not closed (It fails to contain at least one limit point.) The jups at the discontinuities as get really small, though, so for any fixed , is not a limit point of .    Proof that integrability assuming and Fix some . Explain why   Since monotonicity of measure says that .  Since    there is a countable cover of by intervas with   Use compactness and simplify, use a result about finite unions of open intervals from the proof of End with dijoint cover by open intervals.  Since is an opencover of a compact set, it has a finite subcover , Since taking a subcover coes not increase total length, . Now we use th inductive argument from the proof of to see that there is a finite union of disjoint intervals with . Conclusion : We now have a cover of by disjoint open intervals with  Put these in order: If (or ) then replace by (or by ) draw a picture  Before:   After:    Before:   After:    Now break everything up into subintegrals: . Use to get a bound   Break into sub-sums: Over use that is bounded so there are some and with for all  Over there are not points in , : Thus,           A bit more space for the proof that integrability    Proving  Let , be bounded and satisfy that . We need to show that  We need a lemma    Let , be bounded and satisfy that . For any , there is a single so that for every intervals with length ,      Proof of assuming  We get to assume all of the hypotheses of . Consider any and let be the positive number produced by the Lemma. Let be a partition of into intervals each with length less than . Complete the proof.   . We required that the length of is less than , which we chose using . Thus, and so . Since this completes the proof.     Proof of  We will use compactness. Recall what we mean when we say that is compact.  Let . Write down the limit definition of and use it to build a different choice of for each .    . So there is a so that for all , .   Maybe you want to tke the minimum of these 's, but there are infinitely many. Use compact to get them down to a finite list. For technical reasons, divide the 's by 2.    is an open cover of . So, it has a finite subcover, .   Let and be a subset of length less that . Argue that for some .  Let . Then for some . Since .this means that .   Finish the proof   Since , .     "
},
{
  "id": "propBoundDiff",
  "level": "2",
  "url": "course-notes-7.html#propBoundDiff",
  "type": "Proposition",
  "number": "10",
  "title": "",
  "body": " Let , be bounded and satisfy that . Then   "
},
{
  "id": "compactalphaDisc",
  "level": "2",
  "url": "course-notes-7.html#compactalphaDisc",
  "type": "Proposition",
  "number": "11",
  "title": "",
  "body": " Let be a function and . Then is compact. (Even though might not be)  "
},
{
  "id": "course-notes-7-2-14",
  "level": "2",
  "url": "course-notes-7.html#course-notes-7-2-14",
  "type": "Table",
  "number": "12",
  "title": "Example",
  "body": " Example   Use the picture below to explain why has non-closed discontinuity set, but is closed desmos link - See what happens as you zoom in.      "
},
{
  "id": "course-notes-7-2-17",
  "level": "2",
  "url": "course-notes-7.html#course-notes-7-2-17",
  "type": "Proof",
  "number": "1",
  "title": "Proof that <span class=\"process-math\">\\(m^*(\\discont(f)=0)\\implies\\)<\/span> integrability assuming Proposition 10 and Proposition 11.",
  "body": "Proof that integrability assuming and Fix some . Explain why   Since monotonicity of measure says that .  Since    there is a countable cover of by intervas with   Use compactness and simplify, use a result about finite unions of open intervals from the proof of End with dijoint cover by open intervals.  Since is an opencover of a compact set, it has a finite subcover , Since taking a subcover coes not increase total length, . Now we use th inductive argument from the proof of to see that there is a finite union of disjoint intervals with . Conclusion : We now have a cover of by disjoint open intervals with  Put these in order: If (or ) then replace by (or by ) draw a picture  Before:   After:    Before:   After:    Now break everything up into subintegrals: . Use to get a bound   Break into sub-sums: Over use that is bounded so there are some and with for all  Over there are not points in , : Thus,      "
},
{
  "id": "MoreProof",
  "level": "2",
  "url": "course-notes-7.html#MoreProof",
  "type": "Proof",
  "number": "1",
  "title": "A bit more space for the proof that <span class=\"process-math\">\\(m^*(\\discont(f)=0)\\implies\\)<\/span> integrability.",
  "body": " A bit more space for the proof that integrability   "
},
{
  "id": "lemmaBoundDiff",
  "level": "2",
  "url": "course-notes-7.html#lemmaBoundDiff",
  "type": "Lemma",
  "number": "13",
  "title": "",
  "body": "  Let , be bounded and satisfy that . For any , there is a single so that for every intervals with length ,    "
},
{
  "id": "course-notes-7-3-7",
  "level": "2",
  "url": "course-notes-7.html#course-notes-7-3-7",
  "type": "Proof",
  "number": "2",
  "title": "Proof of Proposition 10 assuming Lemma 13.",
  "body": " Proof of assuming  We get to assume all of the hypotheses of . Consider any and let be the positive number produced by the Lemma. Let be a partition of into intervals each with length less than . Complete the proof.   . We required that the length of is less than , which we chose using . Thus, and so . Since this completes the proof.   "
},
{
  "id": "course-notes-7-3-8",
  "level": "2",
  "url": "course-notes-7.html#course-notes-7-3-8",
  "type": "Proof",
  "number": "3",
  "title": "Proof of Lemma 13.",
  "body": " Proof of  We will use compactness. Recall what we mean when we say that is compact.  Let . Write down the limit definition of and use it to build a different choice of for each .    . So there is a so that for all , .   Maybe you want to tke the minimum of these 's, but there are infinitely many. Use compact to get them down to a finite list. For technical reasons, divide the 's by 2.    is an open cover of . So, it has a finite subcover, .   Let and be a subset of length less that . Argue that for some .  Let . Then for some . Since .this means that .   Finish the proof   Since , .   "
},
{
  "id": "course-notes-8",
  "level": "1",
  "url": "course-notes-8.html",
  "type": "Handout",
  "number": "",
  "title": "Riemann Lebesgue part 2 homework (optional)",
  "body": " Riemann Lebesgue part 2 homework (optional)    Prove     In the notes we observed that is not closed. Prove it.  Compose either a direct proof of a proof or a shorter indirect proof of the following   Let be a sequence of functions which converge uniformly to a limiting function . Suppose that for each , is measure zero. Prove that has measure zero.    "
},
{
  "id": "course-notes-8-2-3-2",
  "level": "2",
  "url": "course-notes-8.html#course-notes-8-2-3-2",
  "type": "Claim",
  "number": "14",
  "title": "",
  "body": " Let be a sequence of functions which converge uniformly to a limiting function . Suppose that for each , is measure zero. Prove that has measure zero.  "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
