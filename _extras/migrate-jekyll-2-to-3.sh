#!/bin/bash

# https://talk.jekyllrb.com/t/jekyll-3-x-with-github-pages/1832
# bash ~/Dropbox/GitHub/jekyll/bowerth.github.io/_extras/migrate-jekyll-2-to-3.sh

path="$HOME/Dropbox/GitHub/jekyll/bowerth.github.io/_posts"
# path="$HOME/Downloads/testprofessional"
# file="2015-01-31-jobs.md"

# (./professional/{% post_url 2015-08-13-here-big-data-engineer %}) jekyll 3
# ({% post_url professional/jobs/2015-08-13-here-big-data-engineer %}) jekyll 2

jekyll2_jobs="{\% post_url professional\/jobs\/"
jekyll3_jobs="{\% post_url "

jekyll2_datascience="{\% post_url datascience\/api\/"
jekyll3_datascience="{\% post_url "

jekyll2_personal="{\% post_url personal\/heritage\/"
jekyll3_personal="{\% post_url "

cd $path
FILES=$(find . -maxdepth 3 -type f)
# echo $FILES

for file in $FILES
do
    sed 's/'"$jekyll2_jobs"'/'"$jekyll3_jobs"'/g;s/'"$jekyll2_datascience"'/'"$jekyll3_datascience"'/g;s/'"$jekyll2_personal"'/'"$jekyll3_personal"'/g' $path/${file} > $path/${file}.tmp
    # sed 's/'"$search_jobs"'/'"$jekyll3_jobs"'/g' $path/${file} > $path/${file}.tmp
    rm $path/${file}
    mv $path/${file}.tmp $path/${file}
    echo "jekyll3d file ${file}"
done
