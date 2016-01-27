#!/bin/bash

# https://talk.jekyllrb.com/t/jekyll-3-x-with-github-pages/1832
# bash ~/Dropbox/GitHub/jekyll/bowerth.github.io/_extras/migrate-jekyll-2-to-3.sh

path="$HOME/Dropbox/GitHub/jekyll/bowerth.github.io/_posts"
# path="$HOME/Downloads/testprofessional/jobs"
# file="2015-01-31-jobs.md"
# file="testfile.md"

# (./professional/{% post_url 2015-08-13-here-big-data-engineer %}) jekyll 3
# ({% post_url professional/jobs/2015-08-13-here-big-data-engineer %}) jekyll 2


search_jobs="\.\/professional\/{\% post_url "
replace_jobs="{\% post_url professional\/jobs\/"
search_datascience="\.\/datascience\/{\% post_url "
replace_datascience="{\% post_url datascience\/api\/"
search_personal="\.\/personal\/{\% post_url "
replace_personal="{\% post_url personal\/heritage\/"

# search_jobs="professional"
# replace_jobs="professional jobs"


cd $path
FILES=$(find . -maxdepth 3 -type f)
# echo $FILES

for file in $FILES
do
    # sed 's/'$search_jobs'/'$replace_jobs'/g;s/'$search_date'/'$replace_date'/g' $path/${file} > $path/${file}.tmp
    # sed 's/'"$search_jobs"'/'"${replace_jobs}"'/g' $path/${file} > $path/${file}.tmp
    sed 's/'"$search_jobs"'/'"$replace_jobs"'/g;s/'"$search_datascience"'/'"$replace_datascience"'/g;s/'"$search_personal"'/'"$replace_personal"'/g' $path/${file} > $path/${file}.tmp
    rm $path/${file}
    mv $path/${file}.tmp $path/${file}
    echo "replaced file ${file}"
done
