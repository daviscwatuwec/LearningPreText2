var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "course-documents",
  "level": "1",
  "url": "course-documents.html",
  "type": "Chapter",
  "number": "",
  "title": "Course Documents",
  "body": " Course Documents     "
},
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "",
  "title": "Introducing measure theory",
  "body": " Introducing measure theory   Defining outer measure  Recall the definition of the upper and lower Riemann sums: Let be a function and be a partition. Let and be the supremum and infemum of over the th member of the partition, and be its length. write the definitions of   and   and   The basic idea is that since we can \"measure\" the length of intervals, we can use them to build rectangles to get the area. We have seen that this can fail to resolve the computation of some integrals. Recall that upper integral and lower integral of the indicator function of disagree: while (I am not using the standard notation of a line on top or below due to technical formatting issues), so the philosophy of upper and lower sums only tells you that the area under the curve is somewhere between 0 and 1.  If we could \"measure\" more sets than just intervals, then we might be able to get better information about integration  The fundamental question of measure theory is How to extend this to any subset of >? Can we measure the \"length\" of   Idea If is contained in q union of open intervals: then the \"measure\" of should be at most the sum of the lengths, .   Total length and outer measure   Let be a countable collection of open intervals (remember countable means either finite or countably infinite) the total length of is   For any set , we define the outer measure of by      details The total length is the sum of the lengths of the intervals in : and the outer measure is where runs over all countable open covers of by open intervals.   Facts about outer measure   (points have no measure) For any ,  (monotonicity) If then  (countable subadditivity) For any countable collection of sets ,        For any , is an open cover (containing only one element) with total length , so . Take to complete the proof.  For any countable open cover of by intervals, also covers , so . This means that is a lower bound an the set of all total lengths of countable open covers of . Thus, .  Let . For each , find a countable open cover which does a good job approximating . More precisely, since there is a countable open cover of with . (We pick powers of 2 since ). A countable union of countable sets is still countable, so is a countable collection of open intervals. For any , is in some and so is an element of some . Thus, is a countable open cover, and so . Take to complete the proof.   Here is a neat corollary   Any countable set has outer measure zero. In particular, even though is dense!       Any countable set is a countable union of singleton sets: so countable subadditivity and the fact that singletons have measure zero completes the proof.     outer measure of an interval   measure agrees with length For any (closed) interval , .   Proof of  Consider any and prove that by finding a very simple open cover. Take to make a conclusion.   We will use an open cover of continaing only one element: . Since the outer measure is an infimum, this means that      Proof of  In order to show that we need to show that *every* open cover has total length at least . Let be any countable open cover of by open intervals. Use compactness to make a conclusion.   Since is closed and bounded it is compact. Since is an open cover, it has a finite subcover, . Notice that throwing out a bunch of elements reduces the total length, so \\(\\ell(\\J)\\le \\ell(\\I)\\).   Next we rely on the following fact (which has a straightforward inductive proof based on the number of elements of ). If is a finite collection of open intervals, then there is another countable colection of disjoint open intervals with and . Use this to conclude that and finish the proof.   We now have . Since the elements of are all disjoint, must be a subset of a single element of . Thus, the fact we appealed to says that . Since , . Thus we have shown that is a lower bound on the total length of any countable cover, so      "
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
  "id": "sec--2-12",
  "level": "2",
  "url": "sec-.html#sec--2-12",
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
  "id": "sec--2-14",
  "level": "2",
  "url": "sec-.html#sec--2-14",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "   Any countable set is a countable union of singleton sets: so countable subadditivity and the fact that singletons have measure zero completes the proof.  "
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
  "body": " Measure theory homework (optional)    In Theorem (REFERENCE DELETED FOR DEBUGGING!!!!!) we were pretty lazy with the amount of detail we gave. Pick one or two of these and compose a full proof.   An uncountable measure zero set The famous \"Cantor set\" or \"Cantor dust\" has a few equivalent definitions:    The set of all real numbers which have base 3 expansions containing only 0 and 2 (so is in the Cantor set, but is not. Note that is in the Cantor set)    (A recursive definition) For a set and define . Define a sequence of sets by . Cantor's set is given by    It is not too hard to use the first definition to show that is in bijection with . I want you to study these definitions and compose an argument that \\(C\\) has measure zero.    "
},
{
  "id": "course-notes-5",
  "level": "1",
  "url": "course-notes-5.html",
  "type": "Handout",
  "number": "",
  "title": "Day 1 Guided Notes",
  "body": " Day 1 Guided Notes  Warm up: Use the limit definition of the derivative to find .    The derivative of a function is defined as...    "
},
{
  "id": "course-notes-5-3",
  "level": "2",
  "url": "course-notes-5.html#course-notes-5-3",
  "type": "Definition",
  "number": "5",
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
