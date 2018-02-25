---
layout   : post
category : datascience
tagline  : 
tags     : [R, python]
---
{% include JB/setup %}


## Outlier detection

### Thesis J. Janssens

- [github: jeroenjanssens/phd-thesis](https://github.com/jeroenjanssens/phd-thesis)
- [sos.jeroenjanssens.com](http://sos.jeroenjanssens.com) Stochastic Outlier Selection
- [slideshare: Outlier Selection and One Class Classification](https://fr.slideshare.net/g33ktalk/jeroen-janssensoutlierselectionandone-class-classification-by-jeroen-janssens)
- [github: jeroenjanssens/scikit-sos](https://github.com/jeroenjanssens/scikit-sos)

#### Stochastic Outlier Selection

- Unsupervised outlier selection algorithm
- Employs concept of affinity
- Computes outlier probabilities
- One parameter: perplexity
- Inspired by t-SNE

![Euler Diagrams](/assets/images/diagrams/janssens-outlier-euler.svg)


## Tools

- [Running an R Workshop on Azure with the Ubuntu Data Science Virtual Machine](https://togaware.com/running-an-r-workshop-on-azure-linux-data-science-virtual-machine/)

### rattle

- [rattle: A Graphical User Interface for Data Mining using R](https://rattle.togaware.com)

~~~r
library(rattle)
rattle()
~~~

1. Click Execute
2. Click Yes (load the sample weather dataset)
3. Click the Model tab
4. Click Execute (to build a decision tree)
5. Click Draw to display the decision tree (loads other packages as required)
6. Click the Forest radio button
7. Click Execute (to build a random forest - loads packages as required)
8. Click the Evaluate tab
9. Click the Risk radio button (installs packages as required)
10. Click Execute to display two Risk (Cummulative) performance plots
11. Click the Log tab
12. Click the Export button to save script to file weather script.R to home folder



## Supervised Learning

### Random Forests

#### R

- [awesome-machine-learning: R](https://github.com/josephmisiti/awesome-machine-learning#r)
- rpart: Recursive Partitioning Using the RPART Routines
- [party: A Laboratory for Recursive Partytioning](https://cran.r-project.org/web/packages/party/index.html)
- [partykit: A Toolkit for Recursive Partytioning](https://cran.r-project.org/web/packages/partykit/index.html)

- [Coursera: Predictive Analysis](https://www.coursera.org/learn/predictive-analysis)
- [Coursera: Practical Machine Learning](https://www.coursera.org/learn/practical-machine-learning)
- [wikipedia: Decision Tree Learning](http://en.wikipedia.org/wiki/Decision_tree_learning)


#### Random Forest Exercises

- [R Assignment: Classification of Ocean Microbes](https://www.coursera.org/learn/predictive-analytics/supplement/ROLOs/r-assignment-classification-of-ocean-microbes)


## Data Version Control

- [dataversioncontrol.com](https://dataversioncontrol.com): Make your data science projects reproducible and shareable

## R libraries

### caret

- [caret documentation](http://topepo.github.io/caret/index.html)
- [github: topepo: caret](https://github.com/topepo/caret)
- [companion page to Applied Predictive Modelin by Max Kuhn](http://appliedpredictivemodeling.com/)
- [github APM exercises](https://github.com/topepo/APM_Exercises)
- [webinar on caret](https://www.youtube.com/watch?v=7Jbb2ItbTC4)
- [Article in JSS](https://www.jstatsoft.org/article/view/v028i05)
- [github: topepo: useR2016](https://github.com/topepo/useR2016) Slides and code for the 2016 useR! tutorial "Never Tell Me the Odds! Machine Learning with Class Imbalances" 
- [Applied Predictive Modeling: useR! 2014 morning tutorial](http://appliedpredictivemodeling.com/user2014/)

### Methods

#### Bagging

Some models perform bagging, in `train` function consider `methods` options

- `bagEarth`
- `treebag`
- `bagFDA`

Alternatively, bag any model using the `bag` function


## Links

- [Cortana Intelligence Gallery](https://gallery.cortanaintelligence.com)
- [A Super Harsh Guide to Machine Learning](https://www.reddit.com/r/MachineLearning/comments/5z8110/d_a_super_harsh_guide_to_machine_learning/)
- [DataTau](http://www.datatau.com/)
- [kaggle in class: Academic Machine Learning Competitions](https://inclass.kaggle.com/)
- [UC Irvine Machine Learning Repository](archive.ics.uci.edu/ml/index.html) available from `mlbench` R package
- [KDNuggets: The 10 Algorithms Machine Learning Engineers Need to Know](http://www.kdnuggets.com/2016/08/10-algorithms-machine-learning-engineers.html/)
- [Machine Learning: An In-Depth, Non-Technical Guide](http://www.innoarchitech.com/machine-learning-an-in-depth-non-technical-guide/?utm_source=kdnuggets&utm_medium=post&utm_content=originallink&utm_campaign=guest)
- [Deep Learning Book](http://www.deeplearningbook.org/) by Ian Goodfellow, Yoshua Bengio and Aaron Courville

## Papers

- [Hal R. Varian, Big Data: New Tricks for Econometrics (April 14, 2014)](http://people.ischool.berkeley.edu/~hal/Papers/2013/ml.pdf)

##  Machine Learning for Hackers

Machine Learning for Hackers by Drew Conway and John Myles White (O'Reilly). Copyright 2012 Drew Conway and John Myles White, 978-1-449-30371-6.

- [github: johnmyleswhite: ML_for_Hackers](https://github.com/johnmyleswhite/ML_for_Hackers)

### Resources

- p.37 01_heights_weights_genders.csv

### Models

- [github: rushter: MLAlgorithms](https://github.com/rushter/MLAlgorithms) Minimal and clean examples of machine learning algorithms

- Classification (Spam Filtering)
- Ranking (Priority Inbox)
- Regression (Predicting Page Views)
- Regularization (Text Regression / Logistic regression)
- Optimization (breaking codes / Ridge regression)
- PCA (construct market index / unsupervised learning)
- MDS (visual exploration / distance metrics)
- knn (Recommendation Systems)
- Social Graph Analysis
- tree-based models
- gradient boosting: [LightGBM](https://github.com/Microsoft/LightGBM)

### logistic regression (classification algorithm)

- qualitative concept encoded using numeric values that represent a Boolean distinction: 1 means `true`, whereas 0 means `false` ("dummy coded")
- numeric coding style required by some machine learning algorithms (e.g. logistic regression, `glm` function in R)

Logistic regression is, deep down, essentially a form of regression in which one predicts the probability that an item belongs to one of two categories. (p.175)

### kNN k-Nearest Neighbors Algorithm

### SVM Support Vector Machine

- [KDnuggets: SVR Support Vector Regression](http://www.kdnuggets.com/2017/03/building-regression-models-support-vector-regression.html)

### Deep Learning / Neural Networks

- [youtube: Tensorflow and deep learning](https://www.youtube.com/watch?time_continue=90&v=vq2nnJ4g6N0)
- [Codelabs: TensorFlow and deep learning](https://codelabs.developers.google.com/codelabs/cloud-tensorflow-mnist/#0)
- [github: Lasagne/Lasagne](https://github.com/Lasagne/Lasagne)

### Other Models

- Markov models
- Generalized Linear Models (GLM)
- Probabilistic Graphical Models
- Latent Variable Models
- Time-Series Model
- Real-Time Learning

## Conferences

- [European Conference on Machine Learning and Principles and Practices of Knowledge Discovery in Databases](http://www.ecmlpkdd.org)

## Master Programs

- [Stanford: Department of Statistics: MS in Statistics: Data Science](https://statistics.stanford.edu/academics/ms-statistics-data-science)

## Deep Learning

- [deeplearning.net](http://deeplearning.net)

Torsten Hothorm (UZH) on [Big Data Science](http://user.math.uzh.ch/hothorn/talks/big_data_science_UZH_2014.pdf)

## 17 Great Machine Learning Libraries

Source: [daoudclarke.github.io/machine-learning-libraries](http://daoudclarke.github.io/machine%20learning%20in%20practice/2013/10/08/machine-learning-libraries/)

- CNTK
- Torch
- Caffe

### sckikit-learn

 comprehensive and easy to use, I wrote a whole article on why I like this library.

- [2.7. Novelty and Outlier Detection](http://scikit-learn.org/stable/modules/outlier_detection.html)
- [1.14. Semi-Supervised](http://scikit-learn.org/stable/modules/label_propagation.html)
- [One-class SVM with non-linear kernel (RBF)](http://scikit-learn.org/stable/auto_examples/svm/plot_oneclass.html)

install

~~~
pip install git+https://github.com/scikit-learn/scikit-learn.git --user
~~~


### Python

[Tensorflow](http://www.tensorflow.org)
:   open source software library for numerical computation using data flow graphs

PyBrain
:   Neural networks are one thing that are missing from SciKit-learn, but this module makes up for it.

nltk
:   really useful if you're doing anything NLP or text mining related.

Theano
:   efficient computation of mathematical expressions using GPU. Excellent for deep learning.

Pylearn2
:   machine learning toolbox built on top of Theano - in very early stages of development.

MDP (Modular toolkit for Data Processing)
:   a framework that is useful when setting up workflows.

### Java

- [H2O](http://h2o.ai)
- [h2o GBM Booklet (pdf)](http://docs.h2o.ai/h2o/latest-stable/h2o-docs/booklets/GBMBooklet.pdf)

[SystemML](https://github.com/sparktc/systemml)
:   SystemML is a flexible, scalable machine learning (ML) language written in Java. SystemML's distinguishing characteristics are: (1) algorithm customizability, (2) multiple execution modes, including Standalone, Hadoop Batch, and Spark Batch, and (3) automatic optimization.

Spark
:   Apache's new upstart, supposedly up to a hundred times faster than Hadoop, now includes MLLib, which contains a good selection of machine learning algorithms, including classification, clustering and recommendation generation. Currently undergoing rapid development. Development can be in Python as well as JVM languages.

Mahout
:   Apache's machine learning framework built on top of Hadoop, this looks promising, but comes with all the baggage and overhead of Hadoop.

Weka
:   this is a Java based library with a graphical user interface that allows you to run experiments on small datasets. This is great if you restrict yourself to playing around to get a feel for what is possible with machine learning. However, I would avoid using this in production code at all costs: the API is very poorly designed, the algorithms are not optimised for production use and the documentation is often lacking.

Mallet
:   another Java based library with an emphasis on document classification. I'm not so familiar with this one, but if you have to use Java this is bound to be better than Weka.

JSAT
:   stands for “Java Statistical Analysis Tool” - created by Edward Raff and was born out of his frustation with Weka (I know the feeling). Looks pretty cool.

###.NET

Accord.NET
:   this seems to be pretty comprehensive, and comes recommended by primaryobjects on Reddit. There is perhaps a slight slant towards image processing and computer vision, as it builds on the popular library AForge.NET for this purpose.  
    Another option is to use one of the Java libraries compiled to .NET using IKVM - I have used this approach with success in production.

### C++

Vowpal Wabbit
:   designed for very fast learning and released under a BSD license, this comes recommended by terath on Reddit.

MultiBoost
:   a fast C++ framework implementing some boosting algorithms as well as some cascades (like the Viola-Jones cascades). It's mainly focused on AdaBoost.MH so it is multi-class/multi-label.

Shogun
:   large machine learning library with a focus on kernel methods and support vector machines. Bindings to Matlab, R, Octave and Python.

### General

LibSVM and LibLinear
:   these are C libraries for support vector machines; there are also bindings or implementations for many other languages. These are the libraries used for support vector machine learning in Scikit-learn.


## Coursera

- [Machine Learning by Andrew NG, Stanford University](https://www.coursera.org/learn/machine-learning/)
- [github: faridcher/machine-learning-course](https://github.com/faridcher/machine-learning-course) R version assignments of Stanford machine learning course
- [github: Borye/machine-learning-coursera-1](https://github.com/Borye/machine-learning-coursera-1)
- [github: JWarmenhoven/Coursera-Machine-Learning](https://github.com/JWarmenhoven/Coursera-Machine-Learning)


## People

- Graham Williams: [togaware.com](https://togaware.com)


## Books

From linear models to machine learning
:   Author: Norman Matloff  
    Publisher: CRC Press

The Elements of Statistical Learning
:   Author: Hastie, Tibshirani, and Friedman  
	Content: formal specifications of basic machine learning techniques (mathematics, statistics, computer science)
	URL: [www-stat.stanford.edu/~tibs/ElemStatLearn](http://statweb.stanford.edu/~tibs/ElemStatLearn/)  
    MOOC: [r-bloggers: In-depth introduction to machine learning in 15 hours of expert videos](https://www.r-bloggers.com/in-depth-introduction-to-machine-learning-in-15-hours-of-expert-videos/)

Machine Learning
:   Author: Mitchell, T.M.
    Publisher: McGraw-Hill, NY
    Year: 1997
    URL: http://www.cs.cmu.edu/afs/cs.cmu.edu/user/mitchell/ftp/mlbook.html
    Course: http://www.cs.cmu.edu/~tom/10701_sp11/

Data Mining: Practical Machine Learning Tools and Techniques
:   Author: Witten, I., Frank, E. and Hall, M.
    Edition: 3rd
    Publisher: Morgan Kaufmann, San Mateo, CA, 
    Year: 2011

## Articles

### ASA

Statistics as a Science, Not an Art: The Way to Survive in Data Science
:   2015-02  
    [statscience_feb2015](http://magazine.amstat.org/blog/2015/02/01/statscience_feb2015/)

Statistics Losing Ground to Computer Science
:   2014-11  
    [statistics-losing-ground-to-computer-science](http://magazine.amstat.org/blog/2014/11/01/statistics-losing-ground-to-computer-science/)

Time to Embrace a New Identity?
:   2014-10  
    [statview-oct14](http://magazine.amstat.org/blog/2014/10/01/statview-oct14/)

Statistics Training: A Big Role in Big Data?
:   2014-05  
    [statview-big-data](http://magazine.amstat.org/blog/2014/05/01/statview-big-data/)

Leo Breiman, Statistical Modelling: The Two Cultures, Statistical Science 16(3), 2001
:   [breiman.pdf](http://www.stat.uchicago.edu/~lekheng/courses/191f09/breiman.pdf)

Pedro Domingos, A Few Useful Things to Know about Machine Learning
:   Communications of the ACM, Vol. 55 No. 10, Pages 78-87, 2012  
    [cacm12.pdf](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf)  
    [ml-intro-domingos2012.pdf](http://pages.cs.wisc.edu/~dyer/cs540/handouts/ml-intro-domingos2012.pdf)

- [github: shagunsodhani: papers-i-read](https://github.com/shagunsodhani/papers-I-read)
- [Why becoming a data scientist is NOT actually easier than you think](https://medium.com/cs-math/why-becoming-a-data-scientist-is-not-actually-easier-than-you-think-5b65b548069b)

## Data Sources

FLUENTD
:   data collector for unified logging layer  
	http://www.fluentd.org/

## Data Sets

- [1001 Datasets and Data repositories (List of lists of lists](https://dreamtolearn.com/ryan/1001_datasets)
