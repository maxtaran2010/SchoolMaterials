import requests, json

r = requests.get('https://jsonplaceholder.typicode.com/todos')
print(f'Status code: {r.status_code}')

if r.status_code == 200:
    print("OK")
else:
    print("Error")
    quit()

data = r.json()
completed = {}
for todo in data:
    if not todo["completed"]:
        completed[todo["userId"]] = completed.get(todo["userId"], 0)+1
print(json.dumps(completed))

s = list(completed.items())

s.sort(reverse=False, key=lambda x: x[1])
print(f'{s[0][0]}')
