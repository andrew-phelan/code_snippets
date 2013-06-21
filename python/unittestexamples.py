def test_article_has_no_content(self):
        articles = Article.objects.all()
        for a in articles:
            self.assertNotEqual(len(a.content), 0, "Article has no content")
        
    def test_articles_does_not_contain(self):
        articles = Article.objects.all()
        for a in articles:
            self.assertNotEqual(a.title, "Search Results", "Article 'Search Results Found'")
            
    def test_article_has_no_title(self):
        articles = Article.objects.all()
        for a in articles:
            self.assertNotEqual(a.title, 0, "Article has no title" )
            
    def test_create_article(self):
        start = Article.count()
        Article.create(title = 'title', content = 'content', tags = 'tags')
        self.assertNotEqual(Article.count(), start, "Article Count Equal")
        
    def test_delete_article(self):
        start = Article.count()
        Article.objects.all().delete()
        self.assertNotEqual(start, Article.count(), "Article Not Deleted")       
        
    def test_unique_exception(self):
        Article.create(title="Sample")
        with self.assertRaises(IntegrityError):
            Article.create(title="Sample")
            
    def test_save(self):
        a = Article.save()
        self.assertIsInstance(a, Article, "Saved")
           
    def test_has_entity(self):
        a = Article.objects.all()[0]
        b = a.all_entities(self)
        self.assertNotEqual(b.count, 0, "No Entities Found")
     
    def test_has_any_entities(self):
        a = Article.objects.all()[0]
        b = a.has_any_entities(self)
        self.assertGreater(b.count, 0, "No Entities Found")
    
    def test_has_all_entitties(self):
        articles = Article.objects.all().has_any_entitties(self)
        a = Article.objects.all()[0]
        b = a.has_any_entities(self)
        self.assertFalse(b.count > articles.count, "No Entities Found")
      
    def test_cs_tag(self):
        pass
    
    def test_tag_query(self):
        pass
    
    def test_add_tag(self):
        pass
    
    def test_remove_tag(self):
        pass
    
    def test_has_tag(self):
        pass
    
    def test_has_any_tags(self):
        pass
    
    def test_has_all_tags(self):
        pass
    
    def test_title_query(self):
        pass
    
    def test_content_query(self):
        pass
    
    def test_find_match_with_tags(self):
        match = "tags"
        article = Article.objects.all()
        for a in article:
            self.assertTrue(match == a.find_match_with_tags(tags="tags"), "Failed to match Article using Tag")
    
    def test_find_with_tags(self):
        article = Article.objects.all()
        for a in article:
            self.assertTrue(a.find_with_any_tags(tags="tags"), "Failed to return Article using Tag")
    
    def test_find_with_all_tags(self):
        article = Article.objects.all()
        for a in article:
            self.assertTrue(a.find_with_any_tags(), "Failed to return Article using all Tags")
    
    def test_find_with_any_tags(self):
        article = Article.objects.all()
        for a in article:
            self.assertTrue(a.find_with_any_tags(), "Failed to return Article using any Tags")
    
    def test_find_by_title(self):
        match = Article.objects.all()[0]
        article = Article.objects.all()
        for a in article:
            self.assertEquals(a.find_by_title(match), match, "Title not Found")
