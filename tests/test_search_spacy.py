import spacy

nlp = spacy.load('en')
document = unicode(open("sample_blob.txt").read().decode('utf8')) 
doc = nlp(document)

# Find named entities, phrases and concepts
for entity in doc.ents:
    print(entity.text, entity.label_)
