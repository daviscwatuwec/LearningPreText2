var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "",
  "title": "Introducing measure theory",
  "body": " Introducing measure theory   Defining outer measure  Recall the definition of the upper and lower Riemann sums: Let be a function and be a partition. Let and be the supremum and infemum of over the th member of the partition, and be its length. write the definitions of  The upper and lower sums: and   and the upper and lower integrals and  and  and where runs over all partitions.  The basic idea is that since we can \"measure\" the length of intervals, we can use them to build rectangles to get the area. We have seen that this can fail to resolve the computation of some integrals. Recall that upper integral and lower integral of the indicator function of disagree: while , so the philosophy of upper and lower sums only tells you that the area under the curve is somewhere between 0 and 1.   The indicator function for is . and    If we could \"measure\" more sets than just intervals, then we might be able to get better information about integration. (We won't do this. If you want to learn more - look into Lebesgue integration.   Idea If is contained in q union of open intervals: then the \"measure\" of should be at most the sum of the lengths, .   Total length and outer measure   Let be a countable collection of open intervals (remember countable means either finite or countably infinite) the total length of is   For any set , we define the outer measure of by      details The total length is the sum of the lengths of the intervals in : and the outer measure is where runs over all countable open covers of by open intervals.   Facts about outer measure   (points have no measure) For any ,  (monotonicity) If then  (countable subadditivity) For any countable collection of sets ,        For any , is an open cover (containing only one element) with total length , so . Take to complete the proof.  For any countable open cover of by intervals, also covers , so . This means that is a lower bound an the set of all total lengths of countable open covers of . Thus, .  Let . For each , find a countable open cover which does a good job approximating . More precisely, since there is a countable open cover of with . (We pick powers of 2 since ). A countable union of countable sets is still countable, so is a countable collection of open intervals. For any , is in some and so is an element of some . Thus, is a countable open cover, and so . Take to complete the proof.   Here is a neat corollary   Any countable set has outer measure zero. In particular, even though is dense!       Any countable set is a countable union of singleton sets: so countable subadditivity and the fact that singletons have measure zero completes the proof.      outer measure of an interval   measure agrees with length For any (closed) interval , .   Proof of  Consider any and prove that by finding a very simple open cover. Take to make a conclusion.   We will use an open cover of continaing only one element: . Since the outer measure is an infimum, this means that      Proof of  In order to show that we need to show that *every* open cover has total length at least . Let be any countable open cover of by open intervals. Use compactness to make a conclusion.   Since is closed and bounded it is compact. Since is an open cover, it has a finite subcover, . Notice that throwing out a bunch of elements reduces the total length, so \\(\\ell(\\J)\\le \\ell(\\I)\\).   Next we rely on the following fact (which has a straightforward inductive proof based on the number of elements of ). If is a finite collection of open intervals, then there is another countable colection of disjoint open intervals with and . Use this to conclude that and finish the proof.   We now have . Since the elements of are all disjoint, must be a subset of a single element of . Thus, the fact we appealed to says that . Since , . Thus we have shown that is a lower bound on the total length of any countable cover, so      "
},
{
  "id": "DefnOuterMeasure-s-xref",
  "level": "2",
  "url": "sec-.html#DefnOuterMeasure-s-xref",
  "type": "Definition",
  "number": "1",
  "title": "Total length and outer measure.",
  "body": " Total length and outer measure   Let be a countable collection of open intervals (remember countable means either finite or countably infinite) the total length of is   For any set , we define the outer measure of by     "
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
  "id": "sec--3-2",
  "level": "2",
  "url": "sec-.html#sec--3-2",
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
  "body": " Measure theory homework (optional)    In Theorem we were pretty lazy with the amount of detail we gave. Pick one or two of these and compose a full proof.  Each of and has measure zero. Pick one of them and prove it.  You might be tempted to imitate the proof for , but that proof really used compactness. Instead try to use other results we have already proven.    An uncountable measure zero set The famous \"Cantor set\" or \"Cantor dust\" has a few equivalent definitions:    The set of all real numbers which have base 3 expansions containing only 0 and 2 (so is in the Cantor set, but is not. Note that is in the Cantor set)    (A recursive definition) For a set and define . Define a sequence of sets by . Cantor's set is given by    It is not too hard to use the first definition to show that is in bijection with . I want you to study these definitions and compose an argument that \\(C\\) has measure zero.    "
},
{
  "id": "course-notes-5",
  "level": "1",
  "url": "course-notes-5.html",
  "type": "Section",
  "number": "",
  "title": "Starting the Riemann-Lebesgue lemma",
  "body": " Starting the Riemann-Lebesgue lemma   The Riemann Lebesgue Lemma part 1  Here are two things you will remember from the unit on the Riemann integral:   Every continuous function is integrable         The indicator function for the rationals is not integrable. It is also discontinuous at every point in .      This suggests the following. Perhaps a function is integrable if and only if it is not too discontinuous whatever that means.   The Riemann Lebesgue lemma   A function is integrable over if and only if      Not a proof, but an idea:  Recall a condition involving partitions that is equivalent to a function being integrable.    is integrable if and only if for every there is a partition with    If we want to show that then what do we need to show?   For every there is an countable cover of by open intervals with    So give an idea:   Well, a parition is made out of intervals. Maybe we can use a partition which has to build an open cover of the set o discontinuities.   In order to make this work, we will need a few more details.    Oscillation and -discontinuity.    For an interval , the net oscillation of a function over is given by . The oscillation of at a point is given by     ,      Examples    Explain why    and , so    Explain why    Let and . There are some with and . (Get explicit values if your like.) Thus and . You can make these equality by remembering that the max and min values of are . Thus, . Take the limit as to get       is discontinuous at if and only if      Think about the contrapositive. ( is continuous iff )  Suppose is continuous and let . There is a so that for all if then . But this means that for all , . But then . This can be used to show that . Divide by 2 to conclude that .  Suppose is continuous and let . Since is defined to be a limit. There is some so that for all , if then . Set But then for any , if then , which by has length less that . But that means that     Inspired by this, for any we will set to be the set of all with .         for some   for some   for some     Here is the set of all discontinuities of . Look back at the definition of the outer measure. if and only if .   if and only if for every there is a countable cover of by open interval with total length less than .  So, instead of proving that we will show that for all    Integrability implies has measure zero.  Half of the proof of the Riemann Lebesgue theorem  Suppose that is integrable over and . For any there is a partition so that (Get the oscilation to appear.       Now fix any and restrict this sum to the set of all with . Dropping some terms makes the sum smaller so that,       Divide both sides by        Fact (almost) If , and then . Say something about a cover. (Homework: Fix this claim and prove it)   Every is therefore in some with . is a cover of    Make a conclusion  Bu sub-additivity of outer measure . Take the limit as to conclude that . Since , subadditivity concludes .    "
},
{
  "id": "thm-RiemLebLem",
  "level": "2",
  "url": "course-notes-5.html#thm-RiemLebLem",
  "type": "Theorem",
  "number": "5",
  "title": "The Riemann Lebesgue lemma.",
  "body": " The Riemann Lebesgue lemma   A function is integrable over if and only if    "
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
  "id": "prop-alphaDisc",
  "level": "2",
  "url": "course-notes-5.html#prop-alphaDisc",
  "type": "Proposition",
  "number": "7",
  "title": "",
  "body": "   is discontinuous at if and only if    "
},
{
  "id": "course-notes-5-3-6",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-3-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Think about the contrapositive. ( is continuous iff )  Suppose is continuous and let . There is a so that for all if then . But this means that for all , . But then . This can be used to show that . Divide by 2 to conclude that .  Suppose is continuous and let . Since is defined to be a limit. There is some so that for all , if then . Set But then for any , if then , which by has length less that . But that means that    "
},
{
  "id": "course-notes-5-3-8",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-3-8",
  "type": "Corollary",
  "number": "8",
  "title": "",
  "body": "  "
},
{
  "id": "course-notes-5-3-9",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-3-9",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "    for some   for some   for some    "
},
{
  "id": "course-notes-5-4-2",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-4-2",
  "type": "Proof",
  "number": "1",
  "title": "Half of the proof of the Riemann Lebesgue theorem.",
  "body": "Half of the proof of the Riemann Lebesgue theorem  Suppose that is integrable over and . For any there is a partition so that (Get the oscilation to appear.       Now fix any and restrict this sum to the set of all with . Dropping some terms makes the sum smaller so that,       Divide both sides by        Fact (almost) If , and then . Say something about a cover. (Homework: Fix this claim and prove it)   Every is therefore in some with . is a cover of    Make a conclusion  Bu sub-additivity of outer measure . Take the limit as to conclude that . Since , subadditivity concludes .  "
},
{
  "id": "course-notes-6",
  "level": "1",
  "url": "course-notes-6.html",
  "type": "Handout",
  "number": "",
  "title": "Day 1 Guided Notes",
  "body": " Day 1 Guided Notes  Warm up: Use the limit definition of the derivative to find .    The derivative of a function is defined as...    "
},
{
  "id": "course-notes-6-3",
  "level": "2",
  "url": "course-notes-6.html#course-notes-6-3",
  "type": "Definition",
  "number": "9",
  "title": "",
  "body": "  The derivative of a function is defined as...   "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
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
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
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
