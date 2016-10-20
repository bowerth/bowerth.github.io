---
layout   : post
category : professional
tagline  : 
tags     : 
---
{% include JB/setup %}

## Programming Techniques

### "Structure and Interpretation of Computer Programs" by Harold Abelson, Gerald Jay Sussman, and Julie Sussman

- [github: sarabander: sicp-pdf](https://github.com/sarabander/sicp-pdf)

## Pragmatic Programming from `stan`

- Addison Wesley - The Pragmatic Programmer.pdf
- Code Complete - A Practical Handbook Of Software Construction (2Nd Edition) (2004).pdf

[stan-reference-2.6.2.pdf](https://github.com/stan-dev/stan/releases/download/v2.6.2/stan-reference-2.6.2.pdf)
:   location: /Programming/R/packages/rstan/  
    pages: 25-30

### Use Version Control

Version control software, such as Subversion or Git, should be in place before starting to code._(1)_ It may seem like a big investment to learn version control, but it's well worth it to be able to type a single command to revert to a previously working version or to get the difference between the current version and an old version. It's even better when you need to share work with others, even on a paper.

### Make it Reproducible

Rather than entering commands on the command-line when running models (or entering commands directly into an interactive programming language like R or Python), try writing scripts to run the data through the models and produce whatever posterior analysis you need. Scripts can be written for the shell, R, or Python. Whatever language a script is in, it should be self contained and not depend on global variables having been set, other data being read in, etc.

See Chapter 21 for complete information on reproducibility in Stan and its interfaces.

#### Scripts are Good Documentation

It may seem like overkill if running the project is only a single line of code, but the script provides not only a way to run the code, but also a form of concrete documentation for what is run.

_(1)_ Stan started using Subversion (SVN), then switched to the much more feature-rich Git package. Git does everything SVN does and a whole lot more. The price is a steeper learning curve. For individual or very-small-team development, SVN is just fine.

#### Randomization and Saving Seeds

Randomness defeats reproducibility. MCMC methods are conceptually randomized.
Stan's samplers involve random initializations as well as randomization during each iteration (e.g., Hamiltonian Monte Carlo generates a random momentum in each iteration).

Computers are deterministic. There is no real randomness, just pseudo-random
number generators. These operate by generating a sequence of random numbers
based on a "seed." Stan (and other languages like R) can use time-based methods to generate a seed based on the time and date, or seeds can be provided to Stan (or R) in the form of long integers. Stan writes out the seed used to generate the data as well as the version number of the Stan software so that results can be reproduced at a later date._(2)_

_(2)_ This also requires fixing compilers and hardware, because floating-point arithmetic does not have an absolutely fixed behavior across platforms or compilers, just operating parameters.

### Make it Readable

Treating programs and scripts like other forms of writing for an audience provides an important perspective on how the code will be used. Not only might others want to read a program or model, the developer will want to read it later. One of the motivations of Stan's design was to make models self-documenting in terms of variable usage (e.g., data versus parameter), types (e.g., covariance matrix vs. unconstrained matrix) and sizes.

A large part of readability is consistency. Particularly in naming and layout. Not only of programs themselves, but the directories and files in which they're stored. Readability of code is not just about comments (see Section Section 2.8 for commenting recommendations and syntax in Stan).

It is surprising how often the solution to a debugging or design problem occurs
when trying to explain enough about the problem to someone else to get help. This can be on a mailing list, but it works best person-to-person. Finding the solution to your own problem when explaining it to someone else happens so frequently in software development that the listener is called a "rubber ducky," because they only have to nod along._(3)_

_(3)_ Research has shown an actual rubber ducky won't work. For some reason, the rubber ducky must actually be capable of understanding the explanation.

### Explore the Data

Although this should go without saying, don't just fit data blindly. Look at the data you actually have to understand its properties. If you're doing a logistic regression, is it separable? If you're building a multilevel model, do the basic outcomes vary by level? If you're fitting a linear regression, see whether such a model makes sense by scatterplotting `x` vs. `y`.

### Design Top-Down, Code Bottom-Up

Software projects are almost always designed top-down from one or more intended
use cases. Good software coding, on the other hand, is typically done bottom-up. The motivation for top-down design is obvious. The motivation for bottom-up
development is that it is much easier to develop software using components that have been thoroughly tested. Although Stan has no built-in support for either modularity or testing, many of the same principles apply.

The way the developers of Stan themselves build models is to start as simply as
possibly, then build up. This is true even if we have a complicated model in mind as the end goal, and even if we have a very good idea of the model we eventually want to fit. Rather than building a hierarchical model with multiple interactions, covariance priors, or other complicated structure, start simple. Build just a simple regression with fixed (and fairly tight) priors. Then add interactions or additional levels. One at a time. Make sure that these do the right thing. Then expand.

### Fit Simulated Data

One of the best ways to make sure your model is doing the right thing computationally is to generate simulated (i.e., "fake") data with known parameter values, then see if the model can recover these parameters from the data. If not, there is very little hope that it will do the right thing with data from the wild.

There are fancier ways to do this, where you can do things like run `χ^2` tests on marginal statistics or follow the paradigm introduced in (Cook et al., 2006), which involves interval tests.

### Debug by Print

Although Stan does not have a stepwise debugger or any unit testing framework in place, it does support the time-honored tradition of debug-by-printf._(4)_

_(4)_ The "f" is not a typo - it's a historical artifact of the name of the printf function used for formatted printing in C.

Stan supports print statements with one or more string or expression arguments.
Because Stan is an imperative language, variables can have different values at different points in the execution of a program. Print statements can be invaluable for debugging, especially for a language like Stan with no stepwise debugger. For instance, to print the value of variables y and z, use the following statement.

`print("y=", y, " z=", z);`

This print statement prints the string "y=" followed by the value of y, followed by the string " z=" (with the leading space), followed by the value of the variable z. Each print statement is followed by a new line. The specific ASCII character(s) generated to create a new line are platform specific. Arbitrary expressions can be used. For example, the statement

`print("1+1=", 1+1);`

will print "1 + 1 = 2" followed by a new line.

Print statements may be used anywhere other statements may be used, but their
behavior in terms of frequency depends on how often the block they are in is evaluated. See Section 25.8 for more information on the syntax and evaluation of print statements.

### Comments

#### Code Never Lies

The machine does what the code says, not what the documentation says. Documentation, on the other hand, might not match the code. Code documentation easily rots as the code evolves if the documentation is not well maintained.

Thus it is always preferable to write readable code as opposed to documenting unreadable code. Every time you write a piece of documentation, ask yourself if there's a way to write the code in such a way as to make the documentation unnecessary.

#### Comment Styles in Stan

Stan supports C ++ -style comments; see Section 27.1 for full details. The recommended style is to use line-based comments for short comments on the code or to comment out one or more lines of code. Bracketed comments are then reserved for long documentation comments. The reason for this convention is that bracketed comments cannot be wrapped inside of bracketed comments.

#### What Not to Comment

When commenting code, it is usually safe to assume that you are writing the comments for other programmers who understand the basics of the programming language in use. In other words, don't comment the obvious. For instance, there is no need to have comments such as the following, which add nothing to the code.

```
y ~ normal(0,1);
// y has a unit normal distribution
```

A Jacobian adjustment for a hand-coded transform might be worth commenting, as in the following example.

```
exp(y) ~ normal(0,1);
// adjust for change of vars: y = log | d/dy exp(y) |
increment_log_prob(y);
```

It's an art form to empathize with a future code reader and decide what they will or won't know (or remember) about statistics and Stan.

#### What to Comment

It can help to document variable declarations if variables are given generic names like N, mu, and sigma. For example, some data variable declarations in an item-response model might be usefully commented as follows.

```
int<lower=1> N; // number of observations
int<lower=1> I; // number of students
int<lower=1> J; // number of test questions
```

The alternative is to use longer names that do not require comments.

```
int<lower=1> n_obs;
int<lower=1> n_students;
int<lower=1> n_questions;
```

Both styles are reasonable and which one to adopt is mostly a matter of taste (mostly because sometimes models come with their own naming conventions which should be followed so as not to confuse readers of the code familiar with the statistical conventions).

Some code authors like big blocks of comments at the top explaining the purpose
of the model, who wrote it, copyright and licensing information, and so on. The
following bracketed comment is an example of a conventional style for large comment blocks.

```
/*
* Item-Response Theory PL3 Model
* -----------------------------------------------------
* Copyright: Joe Schmoe <joe@schmoe.com>
* Date: 19 September 2012
* License: GPLv3
*/
data {
// ...
```

The use of leading asterisks helps readers understand the scope of the comment. The problem with including dates or other volatile information in comments is that they can easily get out of synch with the reality of the code. A misleading comment or one that is wrong is worse than no comment at all!

## Data Expeditions

Source: [schoolofdata.org](http://schoolofdata.org/data-expeditions/guide-for-guides/)

Make sure that everyone on your team has a clearly defined role. We usually let people pick this themselves. This is important both so they know where they should start, but also so they know that being present is crucial to the success of the mission. In our offline expeditions, we tried to assign people to the following categories (see the character sheet for more details): - See more at: http://schoolofdata.org/data-expeditions/guide-for-guides/#sthash.FreKsPl1.dpuf

Storyteller
: People who are good at finding interesting angles to explore and producing outputs that really speak to the intended audience. Storytellers are particularly key in defining the question and in pulling together the final mission reports at the end.

Scout
:   Scouts hunt down data from across the web. They can be non-technical or technical, depending on how difficult it is to obtain data (whether it is easily downloadable or needs to be scraped etc).

Analyst
:   Analysts are the ones who crunch the data found by the scouts and test the hypotheses generated by the storytellers.

Engineers
:   Put together the final outputs with help of the group. Engineers are usually somewhere on the technical spectrum but they don't have to necessarily be coders, we've seen loads of great outputs from people who know how to use off-the-shelf tools.

Designers
:   Beautify the outputs and make sure the story really comes through the data. Note: a paper representation of how you would like to present your outputs is just as valid as a fully-fledged interactive graphic produced by a coder (sometimes it even serves as a precursor to an interactive).
