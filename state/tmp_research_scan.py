import requests, feedparser
queries=[
('autonomous software engineering agent benchmark',12),
('multi-agent llm planning reasoning',12),
('llm self-improvement reflection',12),
('llm code agent',12),
('agent memory retrieval augmented generation',12),
('llm agent evaluation benchmark',12),
('model routing llm systems',12),
]
for q,n in queries:
    url='http://export.arxiv.org/api/query'
    params={'search_query':f'all:"{q}"','start':0,'max_results':n,'sortBy':'submittedDate','sortOrder':'descending'}
    txt=requests.get(url,params=params,timeout=30).text
    feed=feedparser.parse(txt)
    print(f'\nQUERY: {q}')
    for e in feed.entries[:10]:
        aid=e.id.split('/abs/')[-1]
        title=' '.join(e.title.split())
        print(f'{aid} | {title[:140]}')
