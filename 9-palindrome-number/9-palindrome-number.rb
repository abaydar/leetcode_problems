# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    x_reverse = x.to_s.reverse.to_i
    if x == x_reverse 
        true
    else
        false
    end
end