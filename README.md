# 1.
GitHub Actions ek automation tool hai jo aapke GitHub repository me Continuous Integration (CI) aur Continuous Deployment (CD) enable karta hai. Matlab, jab bhi aap code push, pull request ya koi aur event karte ho, to ye automatically kuch kaam (jobs) execute kar sakta hai.

# 2. GitHub Actions Kyun Use Karte Hain?
✔ Automation: Code push hote hi automatic kaam ho jaye.
✔ Testing: Code me koi error ya bug to nahi, ye automatically check ho jaye.
✔ Deployment: Jab bhi koi release ho, project auto-deploy ho jaye.
✔ Multi-Platform Support: AWS, Firebase, Docker, Heroku, Vercel sabke saath kaam karta hai.
✔ Time Saving: Har baar manually build/test karne ki zaroorat nahi.


Example:
Agar aapka ek React Native ya Node.js project hai, aur aap chahte ho ki:
✅ Jab bhi code push ho to tests run ho jayein.
✅ Jab bhi koi release create karein to project deploy ho jaye (AWS, Vercel, Firebase, etc.)


# 3.CI/CD ->  
 continuosly integration                                  continuosly deployment
code push->unit test ->Security scan ->                      build->deploy

=>kuch bhi automate karna hai to hume ek workflow create karna hoga.

# 4.workflow->
Workflow ek YAML file hoti hai jo define karti hai ki kaunsa process kab aur kaise run hoga (process like build,test). 
->Yeh GitHub repository ke .github/workflows/ folder me hoti hai.
->one repository can have multiple workflows.

# 5. Events ->ye tab trigger hoga jab workflow ko run karna ho.
push → Jab code push ho.
pull_request → Jab koi PR create kare.
schedule → Daily ya weekly koi task run karna ho.
release → Jab koi GitHub release banaye.

# 6.Runners
Runner ek virtual machine (VM) ya server hota hai jo GitHub Actions ki jobs ko execute karta hai.

Types of runners ->
i.GitHub-Hosted Runners (Default wale)
ii.Self-Hosted Runners (Apne khud ke servers pe)

# 7.GitHub Secrets Setup 
Jab bhi tum GitHub Actions use karte ho aur kisi sensitive information (like API keys, passwords, tokens) ko store karna hota hai, to GitHub Secrets ka use karte hain.

steps:-
your github repo->setting->Secrets and Variables->Actions->New repository secret

# 6.create a work flow => 
  i.create a folder name ".github"
  ii.folder name "workflows"
  iii.file name with "file_name.yaml"  (file_name.yml)


Note: 
i.4 space ka indentation denge
ii.jo bhi mera yml ka code h wo koi remote machine pe chalega,isliye hum remote machine choose karte h.

