if [ ! -f scripts/assume_role.sh ]; then
  curl --header "Authorization: token ${GITHUB_CI_ACCESS_TOKEN}" \
       --header "Accept: application/vnd.github.v3.raw" \
       -o scripts/assume_role.sh \
       --location https://api.github.com/repos/dialoguemd/infra-code/contents/ci-deploy-scripts/assume_role.sh
  chmod +x scripts/assume_role.sh
fi
