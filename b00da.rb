require 'digest'

class B00da 
  def self.obtain_string
    generated_string = ''
    resulting_hash = ''
    until resulting_hash.include?('b00da')
      generated_string = Random.new.bytes(16).unpack1('H*')
      resulting_hash = Digest::SHA256.hexdigest(generated_string)
    end
    generated_string
  end
end
b00da_string = B00da.obtain_string
puts "Generated string is: #{b00da_string} and hash result is: #{Digest::SHA256.hexdigest(b00da_string)}"
