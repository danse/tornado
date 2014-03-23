# All the possible averages

When looking at some time series, which averages should you look at in
order to understand the trend? One week? One month? Three months? And
why just that? This is the question that tornado aims to answer

# What is this

Tornado is a sperimental visualisation which you can include on any
web page or application. It shows all the possible arithmetic means of
a time serie between now and the first value. The results often looks
like a tornado. <a
href="http://danse.github.io/tornado/test/?euro-dollar">Try a demo
here</a>

I plan to explain the design details <a
href="doc/rationale.md">here</a> in the future if any discussion will
rise about them

# What is this practically useful for?

At the moment, the bigger application i see for this is when looking
for trends in data which are updated often, let us say on daily
basis. A *tornado* vis can show you the latest trends, but also the
data history.

The data sets at the moment feature stock indexes, but i do not think
that they represent the best application of this vis. I would say that
the best application is looking at metrics that you (or your company)
can actually affect with some effort. A tornado vis will then show you
the recent successes, but still remind you that this has to last in
order to become more solid

# Try it with your data

In order to do this, i think that the quicker way is clone the repo
and add your data set under `test/`. The data file should be a comma
separated values file formatted like <a
href="https://raw.githubusercontent.com/danse/tornado/master/test/data/DJIA-daily.csv">those
in the demos</a>

# The code is there, anyway

The code is obviously using the awesome [d3 visualisation
library](https://github.com/mbostock/d3). I tried to write the code in
the most portable way, but still i am exposing two global variables,
`tornado` and `aggregate`. Any suggestion in order to make the code
more portable is more than welcome
