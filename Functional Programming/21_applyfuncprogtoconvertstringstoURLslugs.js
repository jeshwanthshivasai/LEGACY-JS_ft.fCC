/*
The last several challenges covered a number of useful array and string methods that follow functional programming principles.

We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms.

From computing averages to sorting, any array operation can be achieved by applying it.

Recall that map and filter are special cases of reduce.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes.

For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce).

You may have already noticed this on the freeCodeCamp site.
*/

// Only change code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");